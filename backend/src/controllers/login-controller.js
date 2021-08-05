const User = require("../models/user-models");
const LoginService = require("../services/login-service");
var loginService = new LoginService();

exports.post = async (req, res) => {
  const value = await loginService.auth(req.body.username, req.body.password);
  if(value)
  res.send({
    success: true
  })
  if(!value)
  res.send({
    success: false
  })
}