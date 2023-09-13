const { Op } = require('sequelize');
const Models = require('../models');
const { paginate } = require('../helpers/functions');
const { defaults } = require('./config');

let globals = {
    sorting: null,
    query: null,
    filters: null
};

const associations = {
    include: [
        {
            model: Models.DistributorZip,
            as: "zips"
        },
        {
            model: Models.DistributorProduct,
            as: "products",
            include: [
                {
                    model: Models.Product,
                    as: "product"
                }
            ]
        }
    ]
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
    const results = await Models.Distributor.findAndCountAll({ 
        subQuery: false,
        distinct: true,
        ...globals.sorting ? {
            order: [globals.sorting]
        } : {},
        where: { 
            ...q ? { 
                [Op.or]: [
                    { email: { [Op.like]: `%${q}%` } },
                    { region: { [Op.like]: `%${q}%` } },
                    { name: { [Op.like]: `%${q}%` } }
                ],
            } : {},
            ...globals.filters && params.actionType !== "filterOptions" ? {
                [Op.and]: []
            } : {}
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
    byID: (req, res) => {
        Models.Distributor.findOne({ where: { id: req.params.id }, ...associations })
            .then(a => {
                res.status(200).send(a);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    byZip: (req, res) => {
        Models.Distributor.findOne({ where: { [Op.like]: `%${ req.params.zip }%` }, ...associations })
            .then(a => {
                res.status(200).send(a);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}

exports.post = {
    index: async (req, res) => {
        const data = req.body || {};

        Models.Distributor.create(data, {...associations})
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
    },
    filter: async (req, res) => {
        const body = req.body || {};
        const results = await fetchAll({ 
            page: body.page, 
            limit: body.limit,
            filters: body.filters,
            actionType: "filterSubmit"
        });

        if(results) {
            res.status(200).send(results);
        } else {
            res.sendStatus(400);
        }
    }
}

exports.put = {
    index: async (req, res) => {
        const data = req.body || {};

        Models.Distributor.update(data, { where: { id: parseInt(req.params.id) } })
            .then(a => {
                if(a) {
                    (async () => {
                        await Models.DistributorZip.destroy({ where: { distributorID: parseInt(req.params.id) } });
                        await Models.DistributorZip.bulkCreate( data.zips.map( z => ({...z, distributorID: parseInt(req.params.id)})));
                        
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
        const id = parseInt(req.params.id);

        Models.Distributor.destroy({ where: { id } })
            .then(a => {
                (async () => {
                    await Models.DistributorZip.destroy({ where: { distributorID: id } });

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