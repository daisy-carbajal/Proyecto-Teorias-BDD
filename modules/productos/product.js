const productMssql = require('./product.mssql');
class Product {
    async getAllProducts(req, res) {
      try {
         const output = await productMssql.getAllProducts();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new Product();