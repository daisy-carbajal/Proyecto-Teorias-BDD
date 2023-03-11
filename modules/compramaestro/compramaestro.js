const compramaestroMSSql = require("./compramaestro.mssql");

class CompraMaestro {

  async getAllCompraMaestro(req, res) {
    try {
      const output = await compramaestroMSSql.getAllCompraMaestro();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneCompraMaestro(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Compra ID no existe.")
      }
      const output = await compramaestroMSSql.getOneCompraMaestro(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async addCompraMaestro(req, res) {
    try {
      const output = await compramaestroMSSql.addCompraMaestro(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCompraMaestro(req, res) {
    try {
      const output = await compramaestroMSSql.updateCompraMaestro(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCompraMaestro(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("Compra ID no existe.")
      }
      const output = await compramaestroMSSql.deleteCompraMaestro(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new CompraMaestro();
