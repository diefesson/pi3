const express = require("express");
<<<<<<< HEAD
const router = express.Router();

const controller = require("../controllers/post-controller");

router.get("/", controller.get);
router.get("/search/name", controller.getByName);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
=======
const postConstroller = require("../controllers/post-controller")

const router = express.Router();

router.get("/", postConstroller.getAll)

module.exports = router;
>>>>>>> login
