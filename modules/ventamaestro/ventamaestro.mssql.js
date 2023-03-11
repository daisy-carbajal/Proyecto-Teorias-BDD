const mssqlcon = require('../../dbconnection');

class VentaMaestroMSSql { 

   async getAllVentaMaestro() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("");
    return res.recordset;
  }

  async getOneVentaMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", id)
    .execute(" ");    
    return res.recordset;
  }

  async addVentaMaestro(venta) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", venta.VENT_COD)
    .input("VENT_CODCLIENTE", venta.VENT_CODCLIENTE)
    .input("VENT_FECHA", venta.VENT_FECHA)
    .execute(" ");
    return res;
 }

 async updateVentaMaestro(venta) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", venta.VENT_COD)
    .input("VENT_CODCLIENTE", venta.VENT_CODCLIENTE)
    .input("VENT_FECHA", venta.VENT_FECHA)
    .execute(" ");
    return res;
 }

 async deleteVentaMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENT_COD", id)
    .execute(" ");
    return res;
  }

}

module.exports = new VentaMaestroMSSql();