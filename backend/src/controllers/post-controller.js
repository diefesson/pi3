const postService = require("../services/post-service")

exports.getAll = (req, res) => {
    res.json(postService.getAll())
}