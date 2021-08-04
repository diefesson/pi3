<<<<<<< HEAD
const Post = require("../models/post");
const PostService = require("../services/post-service");
var postService = new PostService();

exports.get = async (req, res) => {
  res.json(await postService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await postService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await postService.getByName(req.query.name));
};

exports.post = async (req, res) => {
  res.json(
    await postService.add(new Post(req.body.description,req.body.img,req.body.ongId))
  );
};

exports.put = async (req, res) => {
  res.json(
    await postService.update(
      req.params.id,
      new Post(req.body.description,req.body.img,req.body.ongId)
    )
  );
};

exports.delete = (req, res) => {
  res.json(postService.delete(req.params.id));
};
=======
const postService = require("../services/post-service")

exports.getAll = (req, res) => {
    res.json(postService.getAll())
}
>>>>>>> login
