const chalk = require("chalk");

const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

console.log(chalk.bgBlue("--network--"));

router.get("/", function (req, res) {
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error inesperado", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(req, res, "Informacion invalida", 500, "Error simulado");
    });
});

module.exports = router;
