const cliente = require('./cliente');
const express = require('express');
const router = express.Router();

class clienteController{

    constructor(app) {
        router.get('/', cliente.getAllcliente);
        router.get('/:id', cliente.getOnecliente);
        router.post('/', cliente.addcliente);
        router.delete('/:id', cliente.deletecliente);
        router.put('/', cliente.updatecliente);
        app.use('/api/v1/cliente', router);
    }

}

module.exports = clienteController;