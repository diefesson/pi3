const express = require("express");
const router = express.Router();

const controller = require("../controllers/pet-controller");

router.get("/", controller.get);
router.get("/search/race", controller.getByRace);
router.get("/search/sex", controller.getBySex);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
