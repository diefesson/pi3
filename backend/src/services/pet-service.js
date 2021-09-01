const petRepo = require("../repositories/pet-repository");

class PetService {
  add(pet) {
    return petRepo.save(pet);
  }

  getAll() {
    return petRepo.findAll();
  }

  getByOng(id) {
    return petRepo.findOng(id);
  }

  getById(id) {
    return petRepo.findById(id);
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
