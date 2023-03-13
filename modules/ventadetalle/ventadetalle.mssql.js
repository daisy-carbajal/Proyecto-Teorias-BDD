const mssqlcon = require('../../dbconnection');

class VentaDetalleMSSql { 

  /*async getAllVentaDetalle() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_VENTADETALLE");
    return res.recordset;
  }*/

  async getOneVentaDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", id)
    .execute("SP_FILTRAR_VENTADETALLE");    
    return res.recordset;
  }

  async addVentaDetalle(ventad) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", ventad.VENTDET_COD)
    .input("VENTDET_CODPRO", ventad.VENTDET_CODPRO)
    .input("VENTDET_CANTIDAD", ventad.VENTDET_CANTIDAD)
    .execute("SP_INSERT_VENTADETALLE");
    return res;
 }

 async updateVentaDetalle(ventad) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", ventad.VENTDET_COD)
    .input("VENTDET_CODPRO", ventad.VENTDET_CODPRO)
    .input("VENTDET_CANTIDAD", ventad.VENTDET_CANTIDAD)
    .execute("SP_UPDATE_VENTADETALLE");
    return res;
 }

 /*async deleteVentaDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTDET_COD", id)
    .execute("SP_EILIMNAR_VENTADETALLE");
    return res;
  }*/

}

module.exports = new VentaDetalleMSSql();