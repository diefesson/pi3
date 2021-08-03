const User = require("../models/user-models");
const UserService = require("../services/user-service");
var userService = new UserService();

exports.get = (req, res) => {
  res.json(userService.getAll);
}

exports.post = (req, res) => {
  res.json(userService.add(new User(req.body.username, req.body.password, req.body.email, req.body.isAdmin, req.body.ongId)));
}