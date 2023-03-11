const mssqlcon = require('../../dbconnection');

class VentaDetalleMSSql { 

   async getAllVentaDetalle() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("");
    return res.recordset;
  }

  async getOneVentaDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", id)
    .execute(" ");    
    return res.recordset;
  }

  async addVentaDetalle(ventad) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", ventad.VENTDET_COD)
    .input("VENTDET_CODPRO", ventad.VENTDET_CODPRO)
    .input("VENTDET_CANTIDAD", ventad.VENTDET_CANTIDAD)
    .execute(" ");
    return res;
 }

 async updateVentaDetalle(ventad) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", ventad.VENTDET_COD)
    .input("VENTDET_CODPRO", ventad.VENTDET_CODPRO)
    .input("VENTDET_CANTIDAD", ventad.VENTDET_CANTIDAD)
    .execute(" ");
    return res;
 }

 async deleteVentaDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", id)
    .execute(" ");
    return res;
  }

}

module.exports = new VentaDetalleMSSql();