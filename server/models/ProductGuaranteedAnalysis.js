module.exports = (sequelize, DataTypes) => {
    const ProductGuaranteedAnalysis = sequelize.define('product_guaranteed_analysis', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nutrients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    ProductGuaranteedAnalysis.associate = function (models) {
        ProductGuaranteedAnalysis.belongsTo(models.Product, {
            foreignKey: "productID",
            as: "guaranteedAnalysis"
        });
    };
  
    return ProductGuaranteedAnalysis;
}