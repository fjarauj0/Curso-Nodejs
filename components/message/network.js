const express = require("express");
const router = express.Router();
const response = require("../../network/response");

router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/", function (req, res) {
  console.log(req.body);
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Error simulado", 500, "Error simulado");
  } else {
    response.success(req, res, " Añadido correctamente", 201);
  }
});

module.exports = router;
