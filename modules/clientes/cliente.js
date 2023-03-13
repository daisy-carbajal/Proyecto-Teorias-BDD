const clienteMSSql = require("./cliente.mssql");

class Cliente {

  async getAllCliente(req, res) {
    try {
      const output = await clienteMSSql.getAllCliente();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneCliente(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Cliente ID no existe.")
      }
      const output = await clienteMSSql.getOneCliente(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addCliente(req, res) {
    try {
      const output = await clienteMSSql.addCliente(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCliente(req, res) {
    try {
      const output = await clienteMSSql.updateCliente(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCliente(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Cliente ID no existe.")
      }
      const output = await clienteMSSql.deleteCliente(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new Cliente();
