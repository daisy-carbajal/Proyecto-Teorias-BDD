const proveedorMSSql = require("./proveedor.mssql");

class Proveedor {

  async getAllProveedor(req, res) {
    try {
      const output = await proveedorMSSql.getAllProveedor();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneProveedor(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Proveedor ID no existe.")
      }
      const output = await proveedorMSSql.getOneProveedor(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addProveedor(req, res) {
    try {
      const output = await proveedorMSSql.addProveedor(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProveedor(req, res) {
    try {
      const output = await proveedorMSSql.updateProveedor(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProveedor(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Proveedor ID no existe.")
      }
      const output = await proveedorMSSql.deleteProveedor(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new Proveedor();