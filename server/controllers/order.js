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
        // { 
        //     model: Models.Coupon,
        //     as: "coupon"
        // },
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
            model: Models.OrderItem,
            as: "products",
            separate: true,
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
    const results = await Models.Order.findAndCountAll({ 
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
                orderNo: { [Op.like]: `%${ q }%` }
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
        Models.Order.findOne({ where: { code: req.params.id } })
            .then(a => {
                res.status(200).send(a);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    byUserID: (req, res) => {
        Models.Order.findAll({ where: { userID: req.params.userID }, ...associations })
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

        console.log("data -------- ", data)

        const mailer = async (e, subject, d) => {
            const email = emailConfig.config( e, subject, emails.distributor(d) );
            email.mailer.sendMail( email.options, ( err, info ) => {
                if ( err ) {
                    console.log(err);
                    return err;
                } else {
                    return true;
                }
            });
        }
        
        const addOrder = () => {
            Models.Order.create(data, { ...associations })
                .then(a => {
                    if(a) {
                        const orderNo = moment( data.dateCreated ).format( "MMDDYYYY" ) + a.dataValues.id;
                        Models.Order.update({ orderNo }, { where: { id: a.dataValues.id } })
                            .then(b => {
                                if(b) {
                                    (async () => {
                                        await Models.Cart.destroy({ where: { userID: data.userID }});
                                        console.log("cart was detroyed")
                                        emailConfig.config({
                                            email: data.distributor.email,
                                            subject: `Order #${orderNo}`, 
                                            body: emails.distributor({ ...data, orderNo }),
                                            successcb: () => {
                                                console.log("suceed_01")
                                                emailConfig.config({
                                                    email: data.shipping.email,
                                                    subject: `Order #${orderNo}`, 
                                                    body: emails.distributor({ ...data, orderNo }),
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
                            });
                    } else {
                        res.sendStatus(500);
                    }
                })
                .catch(err => {
                    res.status(400).send(err);
                    console.log("catch error")
                });
        }

        if( data.userID ) {
            addOrder();
            console.log("form if")
        } else {
            console.log("from else")
            Models.User.create( { ...data.billing, type: "guest" } )
                .then(a => {
                    if(a) {
                        const userID = a.dataValues.id;
                        console.log("userID", userID)
                        data = { 
                            ...data, 
                            userID: userID,
                            shipping: {
                                ...data.shipping,
                                userID: userID
                            },
                            billing: {
                                ...data.billing,
                                userID: userID
                            }
                        };

                        addOrder();
                    }
                });
        }
    }
}

exports.put = {
    index: async (req, res) => {
        const data = req.body || {};

        Models.Order.update(data, { where: { id: parseInt(req.params.id) } })
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

        Models.Order.destroy({ where: { id: parseInt(req.params.id) } })
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