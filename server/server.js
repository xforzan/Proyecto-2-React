require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./src/config/db");
const { connectCloudinary } = require("./src/config/cloudinary");

const routerUsers = require("./src/api/routes/user");
const routerAuth = require("./src/api/routes/auth");

connectCloudinary();
connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: true,  // permite cualquier origen
  credentials: true
}));

app.use(cookieParser());

app.use("/api/v1/users", routerUsers);
app.use("/api/v1/auth", routerAuth);
app.use("/", (req, res) => {
  res.send("Funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
