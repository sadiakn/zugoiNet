const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Province = require('./province');

const Country = db.define('Country', {
    countryName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

Country.hasMany(Province, { foreignKey: 'countryId', sourceKey: 'id' });
Address.belongsTo(Province, { foreignKey: 'countryId', sourceKey: 'id' });