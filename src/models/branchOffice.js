const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');
const PriceProductBranchOffice = require('./priceProductBranchOffice');


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

BranchOffice.hasMany(PriceProductBranchOffice, { foreignKey: 'branchOfficeId', sourceKey: 'id' });
//BranchOffice.belongsTo(PriceProductBranchOffice, { foreignKey:'branchOfficeId', sourceKey:'id' });

module.exports = BranchOffice;