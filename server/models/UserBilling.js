module.exports = (sequelize, DataTypes) => {
    const UserBilling = sequelize.define('user_billing', {
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

    UserBilling.associate = function (models) {
        UserBilling.belongsTo(models.User, {
            foreignKey: "userID"
        });

        UserBilling.hasOne(models.Order, {
            foreignKey: "billingID"
        });

        UserBilling.hasOne(models.Subscription, {
            foreignKey: "billingID"
        });
    };
  
    return UserBilling;
}