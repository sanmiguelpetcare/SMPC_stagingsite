module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define('product_image', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        originalName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fileType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fileSize: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        isMain: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false
    });

    ProductImage.associate = function (models) {
        ProductImage.belongsTo(models.Product, {
            as: "images",
            foreignKey: "productID"
        });
    };

    return ProductImage;
}