const express = require("express");
const postConstroller = require("../controllers/post-controller")

const router = express.Router();

router.get("/", postConstroller.getAll)

module.exports = router;