class UserService {
    constructor() {
      this.users = [];
      this.id = 0;
    }
  
    add(user) {
      this.id++;
      user.id = this.id;
      this.users.push(user);
    }
  
    getAll() {
      return this.users;
    }
  
    getById(id) {
      return this.users.find((user) => user.id == id);
    }
  
    update(id, user) {
      this.users.forEach(function (e) {
        if (id && id == e.id) {
          for (var i in user) {
            e[i] = user[i];
          }
        }
      });
    }
  
    delete(id) {
      this.users = this.users.filter(function (el) {
        return el.id != id;
      });
    }
  }
  
  module.exports = UserService;