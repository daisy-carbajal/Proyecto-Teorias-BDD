const mssqlcon = require('../../dbconnection');

class CompraMaestroMSSql { 

   async getAllCompraMaestro() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_COMPRAMAESTRO");
    return res.recordset;
  }

  async getOneCompraMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMP_COD", id)
    .execute("SP_FILTRAR_COMPRAMAESTRO");    
    return res.recordset;
  }

  async addCompraMaestro(compra) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMP_COD", compra.COMP_COD)
    .input("COMP_FECHA", compra.COMP_FECHA)
    .input("COMP_CODPROVEEDOR", compra.COMP_CODPROVEEDOR)
    .execute("SP_INSERT_COMPRAMAESTRO");
    return res;
 }

 async updateCompraMaestro(compra) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMP_COD", compra.COMP_COD)
    .input("COMP_FECHA", compra.COMP_FECHA)
    .input("COMP_CODPROVEEDOR", compra.COMP_CODPROVEEDOR)
    .execute("SP_UPDATE_COMPRAMAESTRO");
    return res;
 }

 async deleteCompraMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("COMP_COD", id)
    .execute("SP_ELIMINAR_COMPRAMAESTRO");
    return res;
  }

}

module.exports = new CompraMaestroMSSql();