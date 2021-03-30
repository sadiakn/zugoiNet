const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const BranchOffice = db.define('BranchOffice', {
    addressId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    establishmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = BranchOffice;