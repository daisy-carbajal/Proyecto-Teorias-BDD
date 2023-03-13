const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'sa',
              password: '1234',
              server: 'DAISY-CARBAJAL',
              database: 'mywarehousehn',
              port: 1433,
              trustServerCertificate: true
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();