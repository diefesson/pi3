const express = require("express");

const router = express.Router();

const postController = require("../controllers/post-controller");


router.get("/", postController.get);
router.get("/search/name", postController.getByName);
router.get("/:id", postController.getById);
router.post("/", postController.post);
router.put("/:id", postController.put);
router.delete("/:id", postController.delete);


module.exports = router;
