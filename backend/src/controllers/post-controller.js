const PostService = require("../services/post-service")
const Post = require("../models/post-models");


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
    await postService.add(new Post(req.body.title,req.body.description,req.body.imgurl,req.body.ongId,req.body.petid))
  );
};

exports.put = async (req, res) => {
  res.json(
    await postService.update(
      req.params.id,
      new Post(req.body.title,req.body.description,req.body.imgurl,req.body.ongid,req.body.petid)
    )
  );
};

exports.delete = (req, res) => {
  res.json(postService.delete(req.params.id));
};