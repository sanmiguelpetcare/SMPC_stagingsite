module.exports = (sequelize, DataTypes) => {
    const Distributor = sequelize.define('distributor', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deliveryFee: {
            type: DataTypes.DECIMAL,
        },
        freeDeliveryAmount: {
            type: DataTypes.DECIMAL,
        },
        region: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    });

    Distributor.associate = function (models) {
        Distributor.hasMany(models.DistributorZip, {
            foreignKey: "distributorID",
            as: "zips"
        });

        Distributor.hasMany(models.DistributorProduct, {
            foreignKey: "distributorID",
            as: "products"
        });
    };
  
    return Distributor;
}