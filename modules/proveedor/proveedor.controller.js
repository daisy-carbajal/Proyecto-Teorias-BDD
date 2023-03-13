const proveedor = require('./proveedor');
const express = require('express');
const router = express.Router();

class ProveedorController{

    constructor(app) {
        router.get('/', proveedor.getAllProveedor);
        router.get('/:id', proveedor.getOneProveedor);
        router.post('/', proveedor.addProveedor);
        router.delete('/:id', proveedor.deleteProveedor);
        router.put('/', proveedor.updateProveedor);
        app.use('/api/v1/proveedor', router);
    }

}

module.exports = ProveedorController;