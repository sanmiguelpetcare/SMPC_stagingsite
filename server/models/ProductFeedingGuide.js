module.exports = (sequelize, DataTypes) => {
    const ProductFeedingGuide = sequelize.define('product_feeding_guide', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        weightOfDog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amountOfFood: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    ProductFeedingGuide.associate = function (models) {
        ProductFeedingGuide.belongsTo(models.Product, {
            foreignKey: "productID",
            as: "feedingGuide"
        });
    };
  
    return ProductFeedingGuide;
}