const express = require("express");
const multer = require("multer");
const { uuid } = require("uuidv4");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const app = express();

aws.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "mybucket-marco03",
    acl: "public-read",
    key(req, file, callback) {
      callback(null, uuid() + path.extname(file.originalname));
    },
  }),
});

app.post("/file", upload.single("imagem"), (req, res) => {
  res.send("Imagem enviada");
});

module.exports = router;
