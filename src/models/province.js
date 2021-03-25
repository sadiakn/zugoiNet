const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');
const Address = require('./address');

const Province = db.define('Province', {
    provinceName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    countryId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    }
}, {
    timestamps: false
});

Province.hasMany(Address, { foreignKey: 'provinceId', sourceKey: 'id' });
Province.belongsTo(Address, { foreignKey: 'provinceId', sourceKey: 'id'});