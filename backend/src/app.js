const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use(express.static("public"));

// Routes
const index = require("./routes/index.js");
const pet = require("./routes/pet-route");
const upload = require("./routes/upload-route");
const post = require("./routes/post-route");

app.use("/", index);
app.use("/pet", pet);
app.use("/post", post);
app.use("/upload", upload);
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
