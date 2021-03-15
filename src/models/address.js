const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Address = db.define('Address', {
    countryId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    provinceId: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Address;