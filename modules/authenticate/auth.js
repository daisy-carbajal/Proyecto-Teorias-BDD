const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getConnection = require("../../dbconnection");
const { COOKIE_JWT } = require("../../config.json");
const authMssql = require("./auth.mssql");

exports.signup = async (req, res) => {
  try {
    const output = await authMssql.registerUser(req.body);
    res.send(output);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      throw new Error("Correo o Contraseña no valida. Intente de nuevo.");

    const pool = await getConnection();

    const result = await pool.request().execute(" ");

    const user = result.recordset[0];

    if (!user || !(await correctPassword(password, user.password)))
      throw new Error("Correo o Contraseña incorrectos.");
    // 401: Error for user not found

    createSendToken(user, res);
  } catch (err) {
    console.log(`⛔⛔⛔ Inicio de Sesión: ${err.message}`);
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.logout = (req, res) => {
  res.cookie(COOKIE_JWT, "sesióntermino.", {
    expires: new Date(Date.now() + 10 * 1000), // In 10sec
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
};

async function correctPassword(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
}

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

function createSendToken(user, res) {
  const token = signToken(user.id);

  // Cookie to store the jwt for future to verify protected routes
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), // To mS = D * Hs * min * mS
    httpOnly: true, // The browser will not access or modify the cookie
  };

  // Only will be send on an encrypted connection (https). In Production only we have encrypted connection
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie(COOKIE_JWT, token, cookieOptions);

  // Remove the password from the output
  user.password = undefined;

  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
}
