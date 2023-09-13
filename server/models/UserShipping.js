module.exports = (sequelize, DataTypes) => {
    const UserShipping = sequelize.define('user_shipping', {
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
        city: {
            type: DataTypes.STRING
        },
        province: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        region: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });

    UserShipping.associate = function (models) {
        UserShipping.belongsTo(models.User, {
            foreignKey: "userID"
        });

        UserShipping.hasOne(models.Order, {
            foreignKey: "shippingID"
        });

        UserShipping.hasOne(models.Subscription, {
            foreignKey: "shippingID"
        });
    };
  
    return UserShipping;
}