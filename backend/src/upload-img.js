const express = require("express");
const { uuid } = require("uuidv4");
const path = require("path");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const app = express();

aws.config.update({
  accessKeyId: "AKIARU2CZKWLC7WON6GS",
  secretAccessKey: "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",
  region: "sa-east-1",
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
  console.log("aqui.");
  res.send("OK");
});
