const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Establishment = require('./establishment');

const TypeOfEstablishment = db.define('TypeOfEstablishment', {
    typeOfEstablishmentName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

TypeOfEstablishment.hasMany(Establishment, {foreignKey: 'typeOfEstablishmentId', sourceKey: 'id'});
TypeOfEstablishment.belongsTo(Establishment, {foreignKey: 'typeOfEstablishmentId', sourceKey: 'id'});