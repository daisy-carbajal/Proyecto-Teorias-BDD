const compramaestro = require('./compramaestro');
const express = require('express');
const router = express.Router();

class CompraMaestroController{

    constructor(app) {
        router.get('/', compramaestro.getAllCompraMaestro);
        router.get('/:id', compramaestro.getOneCompraMaestro);
        router.post('/', compramaestro.addCompraMaestro);
        router.delete('/:id', compramaestro.deleteCompraMaestro);
        router.put('/', compramaestro.updateCompraMaestro);
        app.use('/api/v1/compramaestro', router);
    }

}

module.exports = CompraMaestroController;