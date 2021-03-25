const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const BranchOffice = db.define('BranchOffice', {
    addressId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    establishmentId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = BranchOffice;