const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const Models = require('../models');
const { paginate } = require('../helpers/functions');
const { defaults } = require('./config');
const moment = require('moment');

const emails = require('../email-template/distributor');
const emailConfig = require('../email-template/config');

let globals = {
    sorting: null
};

const associations = {
    include: [ 
        { 
            model: Models.User,
            as: "user",
            include: [
                {
                    model: Models.UserFurbaby,
                    as: "furbabies"
                }
            ]
        },
        { 
            model: Models.UserBilling,
            as: "billing"
        },
        { 
            model: Models.UserShipping,
            as: "shipping"
        },
        {
            model: Models.SubscriptionMonth,
            as: "months",
            separate: true,
            order: [["month", "ASC"]],
            include: [
                {
                    model: Models.SubscriptionProduct,
                    as: "products",
                    separate: true,
                    include: [
                        {
                            model: Models.Product,
                            as: "product"
                        }
                    ]
                }
            ]
        }
    ]
}

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
    
    const q = params.actionType === "filterOptions" ? params.query : globals.query;
    const results = await Models.Subscription.findAndCountAll({ 
        subQuery: false,
        distinct: true,
        // limit, 
        // offset, 
        attributes: { exclude: ['userID', 'shippingID', 'billingID'] },
        ...globals.sorting ? {
            order: [globals.sorting]
        } : {
            order: [['dateCreated', 'DESC']]
        },
        where: {
            ...params.from && params.to ? {
                dateCreated: {
                    [Op.between]: [params.from, params.to]
                }
            } : {},
            ...q ? {
                name: { [Op.like]: `%${ q }%` }
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
            actionType: q.actionType,
            ...q
        });

        if(results) {
            res.status(200).send(results);
        } else {
            res.sendStatus(400);
        }
    },
    byID: (req, res) => {
        Models.Subscription.findOne({ 
            where: { userID: req.query.userID, isActive: 0 },
            ...associations
        })
            .then(a => {
                res.status(200).send(a);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    subscribed: (req, res) => {
        Models.Subscription.findOne({ 
            where: { userID: req.params.id, isActive: 1 },
            ...associations
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
    index: async (req, res) => {
        let data = req.body || {};
        
        await Models.Subscription.destroy({ where: { userID: data.userID, isActive: 0 } });

        Models.Subscription.create(data, { ...associations })
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

exports.put = {
    index: async (req, res) => {
        const data = req.body || {};

        console.log(data);

        Models.Subscription.update(data, { where: { id: parseInt(req.params.id) } })
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
    },
    checkout: async (req, res) => {
        const data = req.body || {};

        const billing = await Models.UserBilling.create( data.billing );
        const shipping = await Models.UserShipping.create( data.shipping );

        Models.Subscription.update({ billingID: billing.dataValues.id, shippingID: shipping.dataValues.id, isActive: 1 }, { where: { id: parseInt( req.params.id ) } })
            .then(a => {
                if(a) {
                    (async () => {
                        console.log({...data});
                        emailConfig.config({
                            email: data.distributor.email,
                            subject: "Subscription #" + req.params.id, 
                            body: emails.distributorSubscription({ ...data, orderNo: req.params.id }),
                            successcb: () => {
                                emailConfig.config({
                                    email: data.shipping.email,
                                    subject: "Subscription #" + req.params.id,
                                    body: emails.distributorSubscription({ ...data, orderNo: req.params.id }),
                                    successcb: () => {
                                        console.log("suceed_02")
                                        const results = fetchAll({
                                            page: data.page, 
                                            limit: data.limit
                                        });
        
                                        if(results) {
                                            res.status(200).send(results);
                                            console.log("results", results)
                                        } else {
                                            res.sendStatus(500);
                                        }
                                    }
                                })
                            }
                        });
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

        Models.Subscription.destroy({ where: { id: parseInt(req.params.id) } })
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