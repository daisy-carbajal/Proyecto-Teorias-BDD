const mssqlcon = require('../../dbconnection');
class ProductMSSql { 
   async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_PRODUCTOS");
    return res.recordset;
  }
  async getOneProduct(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", id)
    .execute("SP_FILTRAR_PRODUCTOS");    
    return res.recordset;
  }
  async addProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", prod.PROD_COD)
    .input("PROD_NOMBRE", prod.PROD_NOMBRE)
    .input("PROD_GENERO", prod.PROD_GENERO)
    .input("PROD_COSTO", prod.PROD_COSTO)
    .input("PROD_COLOR", prod.PROD_COLOR)
    .input("PROD_IDPRODTYPE", prod.PROD_IDPRODTYPE)
    .input("PROD_PRECIOVENTA", prod.PROD_PRECIOVENTA)
    .input("PROD_CANTIDAD", prod.PROD_CANTIDAD)
    .input("PROD_CODPROVEEDOR", prod.PROD_CODPROVEEDOR)
    .input("PROD_ACTIVO", prod.PROD_ACTIVO)
    .execute("SP_INSERT_PRODUCTOS");
    return res;
 }
 async updateProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", prod.PROD_COD)
    .input("PROD_NOMBRE", prod.PROD_NOMBRE)
    .input("PROD_GENERO", prod.PROD_GENERO)
    .input("PROD_COSTO", prod.PROD_COSTO)
    .input("PROD_COLOR", prod.PROD_COLOR)
    .input("PROD_IDPRODTYPE", prod.PROD_IDPRODTYPE)
    .input("PROD_PRECIOVENTA", prod.PROD_PRECIOVENTA)
    .input("PROD_CANTIDAD", prod.PROD_CANTIDAD)
    .input("PROD_CODPROVEEDOR", prod.PROD_CODPROVEEDOR)
    .input("PROD_ACTIVO", prod.PROD_ACTIVO)
    .execute("SP_UPDATE_PRODUCTOS");
    return res;
 }
 async disableProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", prod.PROD_COD)
    .input("PROD_ACTIVO", prod.PROD_ACTIVO)
    .execute("SP_DESACTIVAR_PRODUCTO");
    return res;
 }
 async deleteProduct(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", id)
    .execute("SP_BORRAR_PRODUCTO");
    return res;
  }
}
module.exports = new ProductMSSql();