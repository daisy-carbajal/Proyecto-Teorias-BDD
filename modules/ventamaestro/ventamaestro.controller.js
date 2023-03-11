const ventamaestro = require('./ventamaestro');
const express = require('express');
const router = express.Router();

class VentaMaestroController{

    constructor(app) {
        router.get('/', ventamaestro.getAllVentaMaestro);
        router.get('/:id', ventamaestro.getOneVentaMaestro);
        router.post('/', ventamaestro.addVentaMaestro);
        router.delete('/:id', ventamaestro.deleteVentaMaestro);
        router.put('/', ventamaestro.updateVentaMaestro);
        app.use('/api/v1/ventamaestro', router);
    }

}

module.exports = VentaMaestroController;