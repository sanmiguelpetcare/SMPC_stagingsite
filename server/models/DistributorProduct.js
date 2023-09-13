module.exports = (sequelize, DataTypes) => {
    const DistributorProduct = sequelize.define('distributor_product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, {
        timestamps: false
    });

    DistributorProduct.associate = function (models) {
        DistributorProduct.belongsTo(models.Distributor, {
            foreignKey: "distributorID"
        });

        DistributorProduct.belongsTo(models.Product, {
            foreignKey: "productID"
        });
    };
  
    return DistributorProduct;
}