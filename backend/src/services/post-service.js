<<<<<<< HEAD
const postRepo = require("../repositories/post-repo");

class PostService {
  add(post) {
    return postRepo.save(post);
  }

  getAll() {
    return postRepo.findAll();
  }

  getById(id) {
    return postRepo.findOne(id);
  }

  getByRace(name) {
    return postRepo.findByRace(name);
  }

  update(id, post) {
    return petRepo.update(id, post);
  }

  delete(id) {
    return postRepo.delete(id);
  }
}

module.exports = PostService;
=======
const postRepository = require("../repositories/post-repository")

exports.getAll = () =>{
    return postRepository.getAll()
}
>>>>>>> login
