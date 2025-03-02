const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/auth', require('../routes/auth'));
        this.app.use('', require('../routes/usuario'));
        this.app.use('', require('../routes/transferencia'));
        this.app.use('/users', require('../routes/user'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;