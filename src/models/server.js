const express = require('express');

const db = require('../../database/userConnection');

class Server {

    constructor() {
        this.app    =   express();
        this.port   =   process.env.PORT;

        //Database Connection
        this.dbConnection();

        //Path routes

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

    routes(){
        //Main Routes

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('This application in running on port ', this.port);
        });
    }
}

module.exports = Server;