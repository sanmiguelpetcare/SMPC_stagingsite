const CryptoJS = require('crypto-js');
const Models = require('../models');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { paginate } = require('../helpers/functions');
const { defaults } = require('./config');

let globals = {
    sorting: null,
    query: null,
    filters: null
};

const fetchAll = async (params) => {
    const limit = params.limit ? params.limit : defaults.limit;
    const offset = params.page === 1 ? 0 : ((params.page ? params.page : 1) - 1) * limit;

    if( params.sortColumn ) {
        globals.sorting = [params.sortColumn, params.sortOrder ? params.sortOrder : 'ASC'];
    }

    if( params.actionType !== "filterSubmit" && params.actionType !== "filterOptions" ) {
        if( typeof params.query === "string" || ( params.query !== null && params.query !== undefined ) ) {
            globals.query = params.query;
        } else {
            globals.query = null;
        }
    }

    if( params.filters ) {
        globals.filters = params.filters;
    }

    if( params.isMounted ) {
        globals.filters = null;
        globals.query = null;
    }
    
    const q = params.actionType === "filterOptions" ? params.query : globals.query;
    const results = await Models.User.findAndCountAll({ 
        subQuery: false,
        distinct: true,
        // limit, 
        // offset, 
        ...globals.sorting ? {
            order: [globals.sorting]
        } : {},
        where: { 
            ...q ? { 
                [Op.or]: [
                    Sequelize.where(
                        Sequelize.fn(
                            "CONCAT", 
                            Sequelize.col("firstName"), " ", 
                            Sequelize.col("lastName")
                        ), 
                        { [Op.like]: `%${q}%` }
                    ),
                    { email: { [Op.like]: `%${q}%` } },
                    { city: { [Op.like]: `%${q}%` } }
                ],
            } : {}
        },
        include: [
            {
                model: Models.UserFurbaby,
                as: "furbabies"
            }
        ]
    });

    if(results) {
        return paginate(results, params.page, limit);
    }

    return null;
}

exports.get = {
    index: async (req, res) => {
        const q = req.query || {};
        const results = await fetchAll({ 
            page: q.page, 
            limit: q.limit,
            query: q.query,
            isMounted: q.isMounted,
            sortColumn: q.sortColumn,
            sortOrder: q.sortOrder,
            actionType: q.actionType
        });

        if(results) {
            res.status(200).send(results);
        } else {
            res.sendStatus(400);
        }
    },
    byUsername: (req, res) => {
        Models.User.findOne({ 
            where: { 
                email: req.query.email
            } 
        })
        .then(a => {
            res.status(200).send(a);
        })
        .catch(err => {
            res.status(400).send(err);
        });
    }
}

exports.post = {
    index: (req, res) => {
        const data = req.body || {};

        Models.User.create( { ...data, isDeleted: 0 }, { include: [ { model: Models.UserFurbaby, as: "furbabies" } ] } )
            .then(a => {
                if(a) {
                    (async () => {
                        const results = await fetchAll({
                            page: data.page, 
                            limit: data.limit
                        });

                        if(results) {
                            res.status(200).send(results);
                        } else {
                            res.sendStatus(500);
                        }
                    })();
                } else {
                    res.status(500);
                }
            })
            .catch(err => {
                res.status(400);
            });
    },
    login: (req, res) => {
        const body = req.body;
        const params = req.params;
        const data = JSON.parse(CryptoJS.AES.decrypt(body.user, params.id).toString(CryptoJS.enc.Utf8));
        const whereEmail = Sequelize.where(Sequelize.fn('BINARY', Sequelize.col('email')), data.email);
        const wherePassword = Sequelize.where(Sequelize.fn('BINARY', Sequelize.col('password')), data.password);;
        
        /* Check if username exists */
        Models.User.findAll({where: { [Op.or]: [whereEmail] } })
            .then(a => {
                if(a) {
                    /* If username exists, proceed in checking password */
                    if(a.length > 0) {
                        /* Check if password match username */
                        Models.User.findAll({where: { [Op.and]: [{ [Op.or]: [whereEmail] }, wherePassword] }})
                            .then(b => {
                                /* If password matches, send success status */
                                if(b.length > 0) {
                                    let result = b.pop();
                                    delete result.password;

                                    res.status(200).send(result);
                                /* If password doesn't matches, send an error */
                                } else {
                                    res.status(400).send({
                                        error: {password: "Invalid password"}
                                    });
                                }
                            })
                    /* If username doesn't exists, send an error */
                    } else {
                        res.status(400).send({
                            error: {email: "Email address doesn't exists"}
                        });
                    }
                }
            });
    }
}