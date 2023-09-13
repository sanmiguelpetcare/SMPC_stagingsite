module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.TEXT
        },
        weight: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discount: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        discountType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isInStock: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isIncludedInSubscription: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        includedInSubscriptionQty: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });

    Product.associate = function (models) {
        Product.hasMany(models.Cart, {
            foreignKey: "productID"
        });

        Product.hasMany(models.ProductFeedingGuide, {
            foreignKey: "productID",
            as: "feedingGuide"
        });

        Product.hasMany(models.ProductGuaranteedAnalysis, {
            foreignKey: "productID",
            as: "guaranteedAnalysis"
        });

        Product.hasMany(models.ProductImage, {
            foreignKey: "productID",
            as: "images"
        });

        Product.hasMany(models.SubscriptionProduct, {
            foreignKey: "productID"
        });
    };
  
    return Product;
}