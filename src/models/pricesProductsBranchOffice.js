const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const PricesProductsBranchOffice = db.define('PricesProductsBranchOffices', {
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    branchOfficeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = PricesProductsBranchOffice;