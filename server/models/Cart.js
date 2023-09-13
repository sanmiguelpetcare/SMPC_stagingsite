module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Cart.associate = function (models) {
        Cart.belongsTo(models.Product, {
            foreignKey: "productID"
        });

        Cart.belongsTo(models.User, {
            foreignKey: "userID"
        });
    };

    return Cart;
}