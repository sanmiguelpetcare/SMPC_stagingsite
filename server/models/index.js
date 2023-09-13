const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    // logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const models = {
    User:                        require('./User')(sequelize, Sequelize),
    UserBilling:                 require('./UserBilling')(sequelize, Sequelize),
    UserShipping:                require('./UserShipping')(sequelize, Sequelize),
    UserFurbaby:                 require('./UserFurbaby')(sequelize, Sequelize),
    Product:                     require('./Product')(sequelize, Sequelize),
    ProductFeedingGuide:         require('./ProductFeedingGuide')(sequelize, Sequelize),
    ProductGuaranteedAnalysis:   require('./ProductGuaranteedAnalysis')(sequelize, Sequelize),
    ProductImage:                require('./ProductImage')(sequelize, Sequelize),
    Coupon:                      require('./Coupon')(sequelize, Sequelize),
    Cart:                        require('./Cart')(sequelize, Sequelize),
    Order:                       require('./Order')(sequelize, Sequelize),
    OrderItem:                   require('./OrderItem')(sequelize, Sequelize),
    Subscription:                require('./Subscription')(sequelize, Sequelize),
    SubscriptionMonth:           require('./SubscriptionMonth')(sequelize, Sequelize),
    SubscriptionProduct:         require('./SubscriptionProduct')(sequelize, Sequelize),
    Distributor:                 require('./Distributor')(sequelize, Sequelize),
    DistributorZip:              require('./DistributorZip')(sequelize, Sequelize),
    DistributorProduct:          require('./DistributorProduct')(sequelize, Sequelize)
}

Object.keys(models).forEach(modelName => {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
module.exports = models;