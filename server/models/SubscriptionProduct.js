module.exports = (sequelize, DataTypes) => {
    const SubscriptionProduct = sequelize.define('subscription_product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: DataTypes.DECIMAL
        },
        discountType: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        type: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });

    SubscriptionProduct.associate = function (models) {
        SubscriptionProduct.belongsTo(models.Product, {
            foreignKey: "productID"
        });

        SubscriptionProduct.belongsTo(models.SubscriptionMonth, {
            as: "products",
            foreignKey: "subscriptionMonthID"
        });
    };

    return SubscriptionProduct;
}