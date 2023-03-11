const ventamaestroMSSql = require("./ventamaestro.mssql");

class VentaMaestro {

  async getAllVentaMaestro(req, res) {
    try {
      const output = await ventamaestroMSSql.getAllVentaMaestro();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneVentaMaestro(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Venta ID no existe.")
      }
      const output = await ventamaestroMSSql.getOneVentaMaestro(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addVentaMaestro(req, res) {
    try {
      const output = await ventamaestroMSSql.addVentaMaestro(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateVentaMaestro(req, res) {
    try {
      const output = await ventamaestroMSSql.updateVentaMaestro(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteVentaMaestro(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Venta ID no existe.")
      }
      const output = await ventamaestroMSSql.deleteVentaMaestro(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new VentaMaestro();
