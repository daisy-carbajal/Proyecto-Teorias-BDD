const mssqlcon = require("../../dbconnection");
const bcrypt = require("bcryptjs");
const { HASH_SALT } = require("../../config.json");

class AuthMSSql {
  async registerUser(req, res) {
    try {
      const { correo } = req.body.correo;
      let { password } = req.body.password;
      let { nombre } = req.body.nombre;
      let { apellido } = req.body.apellido;
      let { rol } = req.body.rol;
      let { estado } = req.body;

      if (!correo || !password || !rol || !estado)
        throw new Error("Usuario, Contraseña, Rol o Estado no puede ser nulo");

      password = await bcrypt.hash(password, HASH_SALT);

      const conn = await mssqlcon.getConnection();

      const result = await conn
        .request()
        .input("USER_CORREO", correo)
        .input("USER_PASSWORD", password)
        .input("USER_NAME", nombre)
        .input("USER_APELLIDO", apellido)
        .input("USER_ROL", rol)
        .input("USER_ACTIVO", estado)
        .execute(" ");

      if (!result) throw new Error("Error de Registro. Intente de nuevo");

      createSendToken({ id: correo }, res);
    } catch (error) {
        console.log(error);
      }
  }
}

module.exports = new AuthMSSql();
