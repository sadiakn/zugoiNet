const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection'); 

const Price = db.define('Price', {
    price: {
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Price;