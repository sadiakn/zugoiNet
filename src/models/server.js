const express = require('express');
const bodyParser = require('body-parser');

const db = require('../../database/userConnection');

class Server {

    constructor() {
        this.app    =   express();
        this.port   =   process.env.PORT;

        //Database Connection
        this.dbConnection();

        //Path routes
        this.userPath = '/users';

        this.bodyPars();
        //Routes
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Conexion a la base de datos establecida');

        } catch (error) {
            console.log('Error al conectar con la base de datos');
        }
    }

    bodyPars(){
        this.app.use(bodyParser.json());
    }

    routes(){
        //Main Routes
        this.app.use(this.userPath, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('This application in running on port ', this.port);
        });
    }
}

module.exports = Server;