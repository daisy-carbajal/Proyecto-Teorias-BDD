const mssqlcon = require('../../dbconnection');

class ProveedorMSSql { 

   async getAllProveedor() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_PROVEEDORES");
    return res.recordset;
  }

  async getOneProveedor(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", id)
    .execute("SP_FILTRAR_PROVEEDORES");    
    return res.recordset;
  }

  async addProveedor(proveedor) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", proveedor.PROV_COD)
    .input("PROV_NOMBRE", proveedor.PROV_NOMBRE)
    .input("PROV_DIRECCION", proveedor.PROV_DIRECCION)
    .input("PROV_TELEFONO", proveedor.PROV_TELEFONO)
    .execute("SP_INSERT_PROVEEDOR");
    return res;
 }

 async updateProveedor(proveedor) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", proveedor.PROV_COD)
    .input("PROV_NOMBRE", proveedor.PROV_NOMBRE)
    .input("PROV_DIRECCION", proveedor.PROV_DIRECCION)
    .input("PROV_TELEFONO", proveedor.PROV_TELEFONO)
    .execute("SP_UPDATE_PROVEEDOR");
    return res;
 }

 async deleteProveedor(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROV_COD", id)
    .execute("SP_ELIMINAR_PROVEEDOR");
    return res;
  }

}

module.exports = new ProveedorMSSql();