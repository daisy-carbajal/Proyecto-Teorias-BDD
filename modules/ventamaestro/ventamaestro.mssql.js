const mssqlcon = require('../../dbconnection');

class VentaMaestroMSSql { 

   async getAllVentaMaestro() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_VENTASMAESTRO");
    return res.recordset;
  }

  async getOneVentaMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", id)
    .execute("SP_FILTRAR_VENTASMAESTRO");    
    return res.recordset;
  }

  async addVentaMaestro(venta) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", venta.VENT_COD)
    .input("VENT_CODCLIENTE", venta.VENT_CODCLIENTE)
    .input("VENT_FECHA", venta.VENT_FECHA)
    .execute("SP_INSERT_VENTASMAESTRO");
    return res;
 }

 async updateVentaMaestro(venta) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", venta.VENT_COD)
    .input("VENT_CODCLIENTE", venta.VENT_CODCLIENTE)
    .input("VENT_FECHA", venta.VENT_FECHA)
    .execute("SP_UPDATE_VENTASMAESTRO");
    return res;
 }

 async deleteVentaMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", id)
    .execute("SP_DELETE_VENTASMAESTRO");
    return res;
  }

}

module.exports = new VentaMaestroMSSql();