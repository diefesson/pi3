const Pet = require("../models/pet");
const PetService = require("../services/pet-service");
var petService = new PetService();

exports.get = async (req, res) => {
  res.json(await petService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await petService.getById(req.params.id));
};

exports.getByRace = async (req, res) => {
  res.json(await petService.getByRace(req.query.name));
};

exports.getBySex = async (req, res) => {
  res.json(await petService.getBySex(req.query.name));
};

exports.post = async (req, res) => {
  res.json(
    await petService.add(new Pet(req.body.race,req.body.sex,req.body.age,req.body.status))
  );
};

exports.put = async (req, res) => {
  res.json(
    await petService.update(
      req.params.id,
      new Pet(req.body.race,req.body.sex,req.body.age,req.body.status)
    )
  );
};

exports.delete = (req, res) => {
  res.json(petService.delete(req.params.id));
};
