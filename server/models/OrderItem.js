module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('order_item', {
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
        }
    }, {
        timestamps: false
    });

    OrderItem.associate = function (models) {
        OrderItem.belongsTo(models.Product, {
            foreignKey: "productID"
        });

        OrderItem.belongsTo(models.Order, {
            as: "products",
            foreignKey: "orderID"
        });
    };

    return OrderItem;
}