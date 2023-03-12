const cliente = require("./cliente.mssql");

class cliente {

  async getAllcliente(req, res) {
    try {
      const output = await clienteMSSql.getAllcliente();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOnecliente(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Cliente ID no existe.")
      }
      const output = await clienteMSSql.getOnecliente(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addcliente(req, res) {
    try {
      const output = await clienteMSSql.addcliente(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updatecliente(req, res) {
    try {
      const output = await clienteMSSql.updatecliente(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deletecliente(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Cliente ID no existe.")
      }
      const output = await clienteMSSql.deletecliente(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new cliente();
