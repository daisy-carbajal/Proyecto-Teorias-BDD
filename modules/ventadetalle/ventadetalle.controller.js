const ventadetalle = require('./ventadetalle');
const express = require('express');
const router = express.Router();

class VentaDetalleController {

    constructor(app) {
        router.get('/', ventadetalle.getAllVentaDetalle);
        router.get('/:id', ventadetalle.getOneVentaDetalle);
        router.post('/', ventadetalle.addVentaDetalle);
        router.delete('/:id', ventadetalle.deleteVentaDetalle);
        router.put('/', ventadetalle.updateVentaDetalle);
        app.use('/api/v1/ventadetalle', router);
    }

}

module.exports = VentaDetalleController;