const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const Image = db.define('Image', {
    url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Image;