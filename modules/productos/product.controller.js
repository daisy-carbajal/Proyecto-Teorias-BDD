const product = require('./product');
const express = require('express');
const router = express.Router();
class ProductController {
    constructor(app) {
      router.get('/', product.getAllProducts);
      router.get('/:id', product.getOneProduct);
      router.post('/', product.addProduct);
      router.put('/', product.updateProduct);
      router.put('/disable/', product.disableProduct);
      router.delete('/:id', product.deleteProduct);
      app.use('/api/v1/products', router);
    }
 }
module.exports = ProductController;