const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");

require("dotenv").config();

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const uri = `mongodb://${USER}:${PASS}@${DB_NAME}/<dbname>?ssl=true&replicaSet=atlas-6j83hy-shard-0&authSource=admin&retryWrites=true&w=majority`;
db(uri)

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log(
  chalk.yellow("La aplicación esta escuchando en http://localhost:3000")
);
