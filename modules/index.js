class Module {
  constructor(app) {
    this.app = app;
  }

  init() {
    const ProductController = require("./productos/product.controller");
    new ProductController(this.app);

    const VentaDetalleController = require("./ventadetalle/ventadetalle.controller");
    new VentaDetalleController(this.app);

    const VentaMaestroController = require("./ventamaestro/ventamaestro.controller");
    new VentaMaestroController(this.app);

    const CompraDetalleController = require("./compradetalle/compradetalle.controller");
    new CompraDetalleController(this.app);

    const CompraMaestroController = require("./compramaestro/compramaestro.controller");
    new CompraMaestroController(this.app);

    const ClienteController = require("./clientes/cliente.controller");
    new ClienteController(this.app);

    const ProveedorController = require("./proveedor/proveedor.controller");
    new ProveedorController(this.app);

    /*const AuthController = require("./authenticate/auth.controller");
    new AuthController(this.app);*/
  }
}

module.exports = Module;
