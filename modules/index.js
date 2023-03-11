class Module {

    constructor(app) {
       this.app = app;
    }

   init() {
    const ProductController = require('./productos/product.controller');
    new ProductController(this.app);

    const VentaDetalleController = require('./ventadetalle/ventadetalle.controller');
    new VentaDetalleController(this.app);

    const VentaMaestroController = require('./ventamaestro/ventamaestro.controller');
    new VentaMaestroController(this.app);

    const CompraDetalleController = require('./compradetalle/compradetalle.controller');
    new CompraDetalleController(this.app);
    
    const CompraMaestroController = require('./compramaestro/compramaestro.controller');
    new CompraMaestroController(this.app);
   }

  }

  module.exports = Module;