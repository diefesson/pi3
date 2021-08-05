const loginRepository = require("../repositories/login-repository");

class LoginService {
  auth(username, password) {
    return loginRepository.login(username, password);
  }
}

module.exports = LoginService;