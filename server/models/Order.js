const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Order.associate = function (models) {
        Order.belongsTo(models.User, {
            foreignKey: "userID"
        });

        Order.belongsTo(models.Coupon, {
            foreignKey: "couponID"
        });

        Order.hasMany(models.OrderItem, {
            foreignKey: "orderID",
            as: "products"
        });
        
        Order.belongsTo(models.UserBilling, {
            foreignKey: "orderID",
            as: "billing"
        });

        Order.belongsTo(models.UserShipping, {
            foreignKey: "orderID",
            as: "shipping"
        });
    };

    return Order;
}