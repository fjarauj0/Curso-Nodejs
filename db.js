const chalk = require("chalk");
const db = require("mongoose");

db.Promise = global.Promise;

async function connect(url) {
  db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(chalk.cyan("[db] Conectada con éxito")))
    .catch((err) => console.error("[db]", err));
}

module.exports = connect;
