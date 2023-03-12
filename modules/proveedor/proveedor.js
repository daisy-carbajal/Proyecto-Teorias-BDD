const proveedor = require("./proveedor.mssql");

class proveedor {

  async getAllproveedor(req, res) {
    try {
      const output = await proveedorMSSql.getAllproveedor();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneproveedor(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Proveedor ID no existe.")
      }
      const output = await proveedorMSSql.getOneproveedor(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addproveedor(req, res) {
    try {
      const output = await proveedorMSSql.addproveedor(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateproveedor(req, res) {
    try {
      const output = await proveedorMSSql.updateproveedor(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteproveedor(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Proveedor ID no existe.")
      }
      const output = await proveedorMSSql.deleteproveedor(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new proveedor();