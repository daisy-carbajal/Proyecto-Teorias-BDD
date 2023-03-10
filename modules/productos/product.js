const productMssql = require("./product.mssql");
class Product {
  async getAllProducts(req, res) {
    try {
      const output = await productMssql.getAllProducts();
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }
  async getOneProduct(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("ID no existe.");
      }
      const output = await productMssql.getOneProduct(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }
  async addProduct(req, res) {
    try {
      const output = await productMssql.addProduct(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }
  async updateProduct(req, res) {
    try {
      const output = await productMssql.updateProduct(req.body);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }
  async disableProduct(req, res) {
    try {
        const output = await productMssql.disableProduct(req.body);
        res.send(output);
      } catch (error) {
        console.log(error);
      }
  }
  async deleteProduct(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        console.log("ID no existe.");
      }
      const output = await productMssql.deleteProduct(id);
      res.send(output);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new Product();
