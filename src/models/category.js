const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Product = require('./product');

const Category = db.define('Category', {
    categoryName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false
});

Category.hasMany(Product, { foreignKey:'categoryId', sourceKey: 'id' });
Category.belongsTo(Product, { foreignKey:'categoryId', sourceKey: 'id' });