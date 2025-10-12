require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./src/config/db");
const { connectCloudinary } = require("./src/config/cloudinary");
const cors = require("cors")

const routerUsers = require("./src/api/routes/user");
const routerAuth = require("./src/api/routes/auth");

connectCloudinary();
connectDB();

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json());

app.use(cookieParser());

app.use("/api/v1/users", routerUsers);
app.use("/api/v1/auth", routerAuth);
app.use("/", (req, res) => {
  res.send("Funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
