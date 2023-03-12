const mssqlcon = require('../../dbconnection');

class clienteMSSql { 

   async getAllcliente() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("");
    return res.recordset;
  }

  async getOnecliente(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", id)
    .execute(" ");    
    return res.recordset;
  }

  async addcliente(cliente) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", cliente.CLIE_COD)
    .input("CLIE_NOMBRE", cliente.CLIE_NOMBRE)
    .input("CLIE_TELEFONO", cliente.CLIE_TELEFONO)
    .input("CLIE_FECHANACIMIENTO", cliente.CLIE_FECHANACIMIENTO)
    .execute(" ");
    return res;
 }

 async updatecliente(cliente) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", cliente.CLIE_COD)
    .input("CLIE_NOMBRE", cliente.CLIE_NOMBRE)
    .input("CLIE_TELEFONO", cliente.CLIE_TELEFONO)
    .input("CLIE_FECHANACIMIENTO", cliente.CLIE_FECHANACIMIENTO)
    .execute(" ");
    return res;
 }

 async deletecliente(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", id)
    .execute(" ");
    return res;
  }

}

module.exports = new clienteMSSql();