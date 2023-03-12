const mssqlcon = require('../../dbconnection');

class proveedorMSSql { 

   async getAllproveedor() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("");
    return res.recordset;
  }

  async getOneproveedor(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", id)
    .execute(" ");    
    return res.recordset;
  }

  async addproveedor(proveedor) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", proveedor.PROV_COD)
    .input("PROV_NOMBRE", proveedor.PROV_NOMBRE)
    .input("PROV_DIRECCION", proveedor.PROV_DIRECCION)
    .input("PROV_TELEFONO", proveedor.PROV_TELEFONO)
    .execute(" ");
    return res;
 }

 async updateproveedor(proveedor) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", proveedor.PROV_COD)
    .input("PROV_NOMBRE", proveedor.PROV_NOMBRE)
    .input("PROV_DIRECCION", proveedor.PROV_DIRECCION)
    .input("PROV_TELEFONO", proveedor.PROV_TELEFONO)
    .execute(" ");
    return res;
 }

 async deleteproveedor(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", id)
    .execute(" ");
    return res;
  }

}

module.exports = new proveedorMSSql();