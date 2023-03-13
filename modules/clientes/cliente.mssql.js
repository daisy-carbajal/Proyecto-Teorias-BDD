const mssqlcon = require('../../dbconnection');

class ClienteMSSql { 

   async getAllCliente() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_CLIENTES");
    return res.recordset;
  }

  async getOneCliente(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", id)
    .execute("SP_FILTRAR_CLIENTES");    
    return res.recordset;
  }

  async addCliente(cliente) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", cliente.CLIE_COD)
    .input("CLIE_NOMBRE", cliente.CLIE_NOMBRE)
    .input("CLIE_TELEFONO", cliente.CLIE_TELEFONO)
    .input("CLIE_FECHANACIMIENTO", cliente.CLIE_FECHANACIMIENTO)
    .execute("SP_INSERT_CLIENTES");
    return res;
 }

 async updateCliente(cliente) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", cliente.CLIE_COD)
    .input("CLIE_NOMBRE", cliente.CLIE_NOMBRE)
    .input("CLIE_TELEFONO", cliente.CLIE_TELEFONO)
    .input("CLIE_FECHANACIMIENTO", cliente.CLIE_FECHANACIMIENTO)
    .execute("SP_UPDATE_CLIENTES");
    return res;
 }
  async deleteCliente(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIE_COD", id)
    .execute("SP_DELETE_CLIENTES");
    return res;
  }

}

module.exports = new ClienteMSSql();