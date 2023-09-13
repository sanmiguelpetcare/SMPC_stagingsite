module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address1: {
            type: DataTypes.STRING
        },
        address2: {
            type: DataTypes.STRING
        },
        brgy: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        province: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        isDeleted: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });

    User.associate = function (models) {
        User.hasMany(models.Cart, {
            foreignKey: "userID"
        });

        User.hasMany(models.Order, {
            foreignKey: "userID"
        });

        User.hasMany(models.UserFurbaby, {
            foreignKey: "userID",
            as: "furbabies"
        });

        User.hasMany(models.UserBilling, {
            foreignKey: "userID"
        });

        User.hasMany(models.UserShipping, {
            foreignKey: "userID"
        });
    };
  
    return User;
}