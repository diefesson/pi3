const express = require("express");
const petController = require("../controllers/pet-controller")

const router = express.Router();

router.get("/", petController.get);
router.get("/search/race/:race", petController.getByRace);
router.get("/search/sex/:sex", petController.getBySex);
router.get("/search/age/:age", petController.getByAge);
router.get("/search/petOng/:ongid", petController.getByOng);
router.get("/:id", petController.getById);
router.post("/", petController.post);
router.put("/:id", petController.put);
router.delete("/:id", petController.delete);

module.exports = router;