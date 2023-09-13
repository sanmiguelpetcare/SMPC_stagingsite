const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('subscription', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            get() {
                const date = this.getDataValue("dateCreated") ? moment( this.getDataValue("dateCreated") ).format('MM/DD/YYYY') : null;
                
                return date;
            } 
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deliveryWeek: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isActive: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Subscription.associate = function (models) {
        Subscription.belongsTo(models.User, {
            foreignKey: "userID"
        });

        Subscription.hasMany(models.SubscriptionMonth, {
            foreignKey: "subscriptionID",
            as: "months"
        });

        Subscription.belongsTo(models.UserBilling, {
            foreignKey: "billingID",
            as: "billing"
        });

        Subscription.belongsTo(models.UserShipping, {
            foreignKey: "shippingID",
            as: "shipping"
        });
    };

    return Subscription;
}