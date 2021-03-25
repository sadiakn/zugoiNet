const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBUSERPASS, {
  host: process.env.DBHOST,
  dialect: 'postgres',
  //WARNING
  logging: false
})

module.exports = db;