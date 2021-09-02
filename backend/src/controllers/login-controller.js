const LoginService = require("../services/login-service");
var loginService = new LoginService();

exports.post = async (req, res) => {
  const value = await loginService.auth(req.body.username, req.body.password);
  if(value){
    session = req.session;
    session.user = 1;
    res.send({
      success: true,
      user: value
    })
}
  if(!value)
  res.send({
    success: false
  })
}

exports.get = async (req, res) => {
  session = null;
  req.session.destroy();
  res.send({
    success: true
  });
}