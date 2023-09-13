const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const UserFurbaby = sequelize.define('user_furbaby', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            get() {
                const date = this.getDataValue("birthday") ? moment( this.getDataValue("birthday") ).format('MM/DD/YYYY') : null;
                
                return date;
            } 
        },
        foodType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    UserFurbaby.associate = function (models) {
        UserFurbaby.belongsTo(models.User, {
            foreignKey: "userID"
        });
    };
  
    return UserFurbaby;
}