const compradetalleMSSql = require("./compradetalle.mssql");

class CompraDetalle {

  /*async getAllCompraDetalle(req, res) {
    try {
      const output = await compradetalleMSSql.getAllCompraDetalle();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }*/

  async getOneCompraDetalle(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Compra ID no existe.")
      }
      const output = await compradetalleMSSql.getOneCompraDetalle(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addCompraDetalle(req, res) {
    try {
      const output = await compradetalleMSSql.addCompraDetalle(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCompraDetalle(req, res) {
    try {
      const output = await compradetalleMSSql.updateCompraDetalle(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  /*async deleteCompraDetalle(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Compra ID no existe.")
      }
      const output = await compradetalleMSSql.deleteCompraDetalle(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }*/

}

module.exports = new CompraDetalle();
