const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const PostRouter = require("./routers/post-router");
const UserRouter = require("./routers/user-router");

dotenv.config()

const port = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(urlencoded({ extended: true }));
app.use("/posts", PostRouter);
app.use("/users", UserRouter);

app.listen(port, () => {
    console.log("server started at port " + String(port));
});