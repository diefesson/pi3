const postRepo = require("../repositories/post-repository");

class PostService {
  add(post) {
    return postRepo.save(post);
  }

  getAll() {
    return postRepo.findAll();
  }

  getById(id) {
    return postRepo.findById(id);
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
