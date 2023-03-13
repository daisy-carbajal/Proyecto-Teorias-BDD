const cliente = require('./cliente');
const express = require('express');
const router = express.Router();

class ClienteController{

    constructor(app) {
        router.get('/', cliente.getAllCliente);
        router.get('/:id', cliente.getOneCliente);
        router.post('/', cliente.addCliente);
        router.delete('/:id', cliente.deleteCliente);
        router.put('/', cliente.updateCliente);
        app.use('/api/v1/cliente', router);
    }

}

module.exports = ClienteController;