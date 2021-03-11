const { DataTypes } = require('sequelize');
const db = require('../../database/userConnection');

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.CHAR
    },
    password: {
        type: DataTypes.STRING
    }
});

module.exports = User;