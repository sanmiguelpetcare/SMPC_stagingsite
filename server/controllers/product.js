const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const Models = require('../models');
const { paginate, uploader } = require('../helpers/functions');
const { defaults } = require('./config');

let globals = {
    sorting: null,
    query: null,
    filters: null
};

const associations = {
    include: [
        {
            model: Models.ProductFeedingGuide,
            as: "feedingGuide"
        },
        {
            model: Models.ProductGuaranteedAnalysis,
            as: "guaranteedAnalysis"
        },
        {
            model: Models.ProductImage,
            as: "images"
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
    const results = await Models.Product.findAndCountAll({ 
        subQuery: false,
        distinct: true,
        // limit, 
        // offset, 
        ...globals.sorting ? {
            order: [globals.sorting]
        } : {},
        where: { 
            isDeleted: false,
            ...q ? { 
                [Op.or]: [
                    { name: { [Op.like]: `%${q}%` } }
                ],
            } : {},
            ...globals.filters && params.actionType !== "filterOptions" ? {
                [Op.and]: [
                    globals.filters.weight ? { weight: globals.filters.weight } : null,
                    globals.filters.category ? { category: globals.filters.category } : null,
                    globals.filters.isInStock != undefined && globals.filters.isInStock != null ? { isInStock: globals.filters.isInStock } : null
                ]
            } : {},
            ...q ? {
                name: { [Op.like]: `%${ q }%` }
            } : {},
            ...params.inStock !== null && params.inStock !== undefined ? { isInStock: params.inStock ? 1 : 0 } : {},
            ...params.includedInSubscription !== null && params.includedInSubscription !== undefined ? { isIncludedInSubscription: params.includedInSubscription ? 1 : 0 } : {}
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
            inStock: q.inStock,
            includedInSubscription: q.includedInSubscription
        });

        if(results) {
            res.status(200).send(results);
        } else {
            res.sendStatus(400);
        }
    },
    byID: (req, res) => {
        Models.Product.findOne({ where: { id: req.params.id }, ...associations })
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

        Models.Product.create(data, {...associations})
            .then(a => {
                if(a) {
                    res.status(200).send({ id: a.id });
                } else {
                    res.sendStatus(500);
                }
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    bulk: async data => {
        for await( const d of data ) {
            await Models.Product.create( d );
        }

        return true;
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

        if( ( data.images || [] ).length > 0 ) {
            await Models.ProductImage.destroy({ where: { id: data.images } });
        }

        Models.Product.update(data, { where: { id: parseInt(req.params.id) } })
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
    upload: async (req, res, next) => {
        const fields = [
            { name: "images", maxCount: 10 }
        ];

        uploader({ fields, req, res })(req, res, err => {
            if(!err) {
                const id = parseInt(req.params.id);
                const body = req.body || {};
                const files = req.files || {};
                console.log("files", files)
                
                let images = [];

                if( files.images ) {
                    images = (files.images || []).map((f, i) => ({
                        name: process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging" ? f.key : `${f.fieldname}/${f.filename}`,
                        originalName: f.originalname,
                        fileType: f.mimetype,
                        fileSize: f.size,
                        productID: id,
                        isMain: i === 0 ? true : false
                    }))
                }

                if(images.length > 0) {
                    Models.ProductImage.bulkCreate(images);
                }
                
                (async () => {
                    const results = await fetchAll({ page: body.page, limit: body.limit });

                    if(results) {
                        res.status(200).send({ images, list: results });
                    } else {
                        res.sendStatus(500);
                    }
                })();
            } else {
                console.log(err);
                res.status(500).send(err);
            }
        });
    }
}

exports.delete = {
    index: async (req, res) => {
        const data = req.query || {};
        const id = parseInt(req.params.id);

        Models.Product.update({ isDeleted: true }, { where: { id } })
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