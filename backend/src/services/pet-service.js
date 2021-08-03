const petRepo = require("../repositories/pet-repo");

class PetService {
  add(pet) {
    return petRepo.save(pet);
  }

  getAll() {
    return petRepo.findAll();
  }

  getById(id) {
    return petRepo.findOne(id);
  }

  getByRace(race) {
    return petRepo.findByRace(race);
  }

  getBySex(sex) {
    return petRepo.findBySex(sex);
  }

  update(id, pet) {
    return petRepo.update(id, pet);
  }

  delete(id) {
    return petRepo.delete(id);
  }
}

module.exports = PetService;
