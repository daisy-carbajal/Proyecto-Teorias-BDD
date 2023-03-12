const express = require("express");
const authController = require("./auth");
const router = express.Router();

class AuthController {
  constructor(app) {
    router.post("/signup", authController.signup);
    router.post("/login", authController.login);

    router.get("/me", (req, res) => {
      res.status(200).json({
        status: "success",
      });
    });

    app.use('/api/v1/auth', router);
  }
}

module.exports = AuthController;
