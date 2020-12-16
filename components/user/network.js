const chalk = require("chalk");

const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

console.log(chalk.bgBlue("--network users--"));

router.post("/", function (req, res) {
  console.log(req.body.name);
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Informacion invalida", 500, "Error", e);
    });
});

router.get("/", function (req, res) {
  controller
    .getAllUsers()
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Informacion invalida", 500, "Error", e);
    });
});

module.exports = router;
