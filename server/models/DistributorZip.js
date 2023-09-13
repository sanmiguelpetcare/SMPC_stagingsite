module.exports = (sequelize, DataTypes) => {
    const DistributorZip = sequelize.define('distributor_zip', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        town: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    DistributorZip.associate = function (models) {
        DistributorZip.belongsTo(models.Distributor, {
            foreignKey: "distributorID"
        });
    };
  
    return DistributorZip;
}