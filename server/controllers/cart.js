const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const Models = require('../models');
const { paginate } = require('../helpers/functions');
const { defaults } = require('./config');

let globals = {
    sorting: null
};


const associations = {
    include: [ 
        { 
            model: Models.Product,
            as: "product",
            include: [
                {
                    model: Models.ProductImage,
                    as: "images"
                }
            ]
        },
        { 
            model: Models.User,
            as: "user"
        }
    ]
}

const fetchAll = async (params) => {
    const limit = params.limit ? params.limit : defaults.limit;
    const offset = params.page === 1 ? 0 : ((params.page ? params.page : 1) - 1) * limit;

    if( params.sortColumn ) {
        globals.sorting = [params.sortColumn, params.sortOrder ? params.sortOrder : 'ASC'];
    }
    
    const results = await Models.Cart.findAndCountAll({ 
        subQuery: false,
        distinct: true,
        // limit, 
        // offset, 
        attributes: { exclude: ['userID', 'productID'] },
        ...globals.sorting ? {
            order: [globals.sorting]
        } : {},
        where: {
            ...params.userID ? { 
                userID: params.userID
            } : {},
        },
        ...associations
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
    byUser: async (req, res) => {
        const q = req.query || {};
        const results = await fetchAll({ 
            page: q.page, 
            limit: q.limit,
            query: q.query,
            isMounted: q.isMounted,
            sortColumn: q.sortColumn,
            sortOrder: q.sortOrder,
            actionType: q.actionType,
            userID: req.params.id
        });

        if(results) {
            res.status(200).send(results);
        } else {
            res.sendStatus(400);
        }
    }
}

exports.post = {
    index: async (req, res) => {
        const data = req.body || {};
        
        const isExisting = await Models.Cart.findOne({ where: { userID: data.userID, productID: data.productID }});

        if( isExisting ) {
            this.put.index( 
                { 
                    ...req, 
                    params: { 
                        ...req.params,
                        id: isExisting.dataValues.id
                    }, 
                    body: { 
                        ...req.body, 
                        ...data, 
                        qty: parseInt(isExisting.dataValues.qty) + parseInt(data.qty) 
                    }
                }, res 
            );
        } else {
            Models.Cart.create(data)
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
                        res.sendStatus(500);
                    }
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    }
}

exports.put = {
    index: async (req, res) => {
        const data = req.body || {};

        Models.Cart.update(data, { where: { id: parseInt(req.params.id) } })
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
                }
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}

exports.delete = {
    index: async (req, res) => {
        const data = req.query || {};

        Models.Cart.destroy({ where: { id: parseInt(req.params.id) } })
            .then(a => {
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
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}