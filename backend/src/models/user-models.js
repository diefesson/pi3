class User {
    constructor(username, password, email, isAdmin, ongId) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.isAdmin = isAdmin;
      this.ongId = ongId;
    }
  }
  
  module.exports = User;