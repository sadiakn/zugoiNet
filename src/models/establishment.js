const { DataTypes } = require('sequelize'); 
const db = require('../../database/userConnection'); 

const BranchOffice = require('./branchOffice');

const Establishment = db.define('Establishment', {
    establishmentName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }, 
    typeOfEstablishmentId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    }
}, {
    timestamps: false
});

Establishment.hasMany(BranchOffice, { foreignKey: 'establishmentId', sourceKey: 'id '});
Establishment.belongsTo(BranchOffice, { foreignKey: 'establishmentId', sourceKey: 'id '});
