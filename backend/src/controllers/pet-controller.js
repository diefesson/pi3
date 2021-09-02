const Pet = require("../models/pet-models");
const PetService = require("../services/pet-service");

var petService = new PetService();

exports.get = async (req, res) => {
  res.json(await petService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await petService.getById(req.params.id));
};

exports.getByRace = async (req, res) => {
  res.json(await petService.getByRace(req.query.race));
};

exports.getByAge = async (req, res) => {
  res.json(await petService.getByAge(req.params.age));
};

exports.getBySex = async (req, res) => {
  res.json(await petService.getByRace(req.query.sex));
};

exports.getByOng = async (req, res) => {
  res.json(await petService.getByOng(req.params.ongid));
};

exports.post = async (req, res) => {
  const value = await petService.add(
    new Pet(
      req.body.race,
      req.body.age,
      req.body.sex,
      req.body.status,
      req.body.ongid,
      req.body.title
    )
  );
  if (!value) res.send({ success: false });
  else {
    res.json({ success: true });
  }
};

exports.put = async (req, res) => {
  res.json(
    await petService.update(
      req.params.id,
      new Pet(
        req.body.race,
        req.body.age,
        req.body.sex,
        req.body.status,
        req.body.ongid,
        req.body.title
      )
    )
  );
};

exports.delete = (req, res) => {
  res.json(petService.delete(req.params.id));
};
