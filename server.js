const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const response = require("./network/response");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  // res.send("Hola desde get");
  response.success(req, res, "Lista de mensajes");
});

router.post("/message", function (req, res) {
  console.log(req.body);
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Error simulado");
  } else {
    response.success(req, res, " Añadido correctamente", 201);
  }
});

// app.use("/", function (req, res) {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
