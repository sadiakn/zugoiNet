const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Address = db.define('Address', {
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING(20)
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Address;