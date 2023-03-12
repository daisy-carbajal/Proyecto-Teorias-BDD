const proveeedor = require('./proveeedor');
const express = require('express');
const router = express.Router();

class proveeedorController{

    constructor(app) {
        router.get('/', proveeedor.getAllproveeedor);
        router.get('/:id', proveeedor.getOneproveeedor);
        router.post('/', proveeedor.addproveeedor);
        router.delete('/:id', proveeedor.deleteproveeedor);
        router.put('/', proveeedor.updateproveeedor);
        app.use('/api/v1/proveeedor', router);
    }

}

module.exports = proveeedorController;