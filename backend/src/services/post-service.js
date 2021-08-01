const postRepository = require("../repositories/post-repository")

exports.getAll = () =>{
    return postRepository.getAll()
}