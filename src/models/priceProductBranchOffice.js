const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const PriceProductBranchOffice = db.define('PriceProductBranchOffice', {
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    branchOfficeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    Price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = PriceProductBranchOffice;