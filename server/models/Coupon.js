module.exports = (sequelize, DataTypes) => {
    const Coupon = sequelize.define('coupon', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        coupon: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        discount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        discountType: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATEONLY,
            get() {
                const date = this.getDataValue("startDate") ? moment( this.getDataValue("startDate") ).format('MM/DD/YYYY') : null;
                
                return date;
            } 
        },
        endDate: {
            type: DataTypes.DATEONLY,
            get() {
                const date = this.getDataValue("endDate") ? moment( this.getDataValue("endDate") ).format('MM/DD/YYYY') : null;
                
                return date;
            } 
        },
        limit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        limitType: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Coupon.associate = function (models) {
        Coupon.hasMany(models.Order, {
            foreignKey: "couponID"
        });
    };

    return Coupon;
}