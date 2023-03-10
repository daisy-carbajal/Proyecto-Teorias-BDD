class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const ProductController = require('./productos/product.controller');
    new ProductController(this.app);
   }
  }
  module.exports = Module;