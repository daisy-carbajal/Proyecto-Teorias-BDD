const ventadetalleMssql = require("./ventadetalle.mssql");

class VentaDetalle {

  async getAllVentaDetalle(req, res) {
    try {
      const output = await ventadetalleMssql.getAllVentaDetalle();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneVentaDetalle(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Venta ID no existe.")
      }
      const output = await ventadetalleMssql.getOneVentaDetalle(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addVentaDetalle(req, res) {
    try {
      const output = await ventadetalleMssql.addVentaDetalle(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateVentaDetalle(req, res) {
    try {
      const output = await ventadetalleMssql.updateVentaDetalle(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteVentaDetalle(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Venta ID no existe.")
      }
      const output = await ventadetalleMssql.deleteVentaDetalle(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new VentaDetalle();
