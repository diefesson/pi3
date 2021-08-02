const Login = require("../models/Login");
const LoginService = require("../services/login-service");
var loginService = new LoginService();

exports.post = async (req, res) => {
    res.json(
      await loginService.add(new Login(req.body.name, req.body.price))
    );
  };