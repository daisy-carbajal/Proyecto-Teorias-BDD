const mssqlcon = require('../../dbconnection');

class CompraDetalleMSSql { 

   async getAllCompraDetalle() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("");
    return res.recordset;
  }

  async getOneCompraDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMPDET_COD", id)
    .execute(" ");    
    return res.recordset;
  }

  async addCompraDetalle(compra) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMPDET_COD", compra.COMPDET_COD)
    .input("COMPDET_CODPRO", compra.COMPDET_CODPRO)
    .input("COMPDET_CANTIDAD", compra.COMPDET_CANTIDAD)
    .execute(" ");
    return res;
 }

 async updateCompraDetalle(compra) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMPDET_COD", compra.COMPDET_COD)
    .input("COMPDET_CODPRO", compra.COMPDET_CODPRO)
    .input("COMPDET_CANTIDAD", compra.COMPDET_CANTIDAD)
    .execute(" ");
    return res;
 }

 async deleteCompraDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMPDET_COD", id)
    .execute(" ");
    return res;
  }

}

module.exports = new CompraDetalleMSSql();
