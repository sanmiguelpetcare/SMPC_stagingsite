module.exports = (sequelize, DataTypes) => {
    const SubscriptionMonth = sequelize.define('subscription_month', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    SubscriptionMonth.associate = function (models) {
        SubscriptionMonth.belongsTo(models.Subscription, {
            as: "months",
            foreignKey: "subscriptionID"
        });

        SubscriptionMonth.hasMany(models.SubscriptionProduct, {
            foreignKey: "subscriptionMonthID",
            as: "products"
        });
    };

    return SubscriptionMonth;
}