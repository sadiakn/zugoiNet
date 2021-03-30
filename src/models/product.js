const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Image = require('./image');

const Product = db.define('Product', {
    barCode: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    productName: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Product.hasMany(Image, { foreignKey: 'productId', sourceKey: 'id' });
//Product.belongsTo(Image, { foreignKey: 'productId', sourceKey: 'id' });

module.exports = Product;