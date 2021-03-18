const { DataTypes } = require('sequelize');
const { truncate } = require('../../database/userConnection');
const db = require('../../database/userConnection'); 

const Product = db.define('Product', {
    barCode: {
        type: DataTypes.STRING(30), 
        allowNull: false,
        unique: true
    }, 
    productName: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}); 

module.exports = Product; 