const compradetalle = require('./compradetalle');
const express = require('express');
const router = express.Router();

class CompraDetalleController{

    constructor(app) {
        /*router.get('/', compradetalle.getAllCompraDetalle);*/
        router.get('/:id', compradetalle.getOneCompraDetalle);
        router.post('/', compradetalle.addCompraDetalle);
        /*router.delete('/:id', compradetalle.deleteCompraDetalle);*/
        router.put('/', compradetalle.updateCompraDetalle);
        app.use('/api/v1/compradetalle', router);
    }

}

module.exports = CompraDetalleController;