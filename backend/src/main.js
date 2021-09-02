const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const PostRouter = require("./routers/post-router");
const PetRouter = require("./routers/pet-router");
const UserRouter = require("./routers/user-router");
const LoginRouter = require("./routers/login-router");
const uploadImagem = require("./routers/upload-imagens-router");

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());
app.use(
    sessions({
        secret: process.env.SECRET,
        saveUninitialized: true,
        resave: false
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use("/pets", PetRouter);
app.use("/posts", PostRouter);
app.use("/users", UserRouter);
app.use("/login", LoginRouter);
app.use("/file", uploadImagem);

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

app.listen(port, () => {
  console.log("server started at port " + String(port));
});
