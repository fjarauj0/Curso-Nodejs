require('dotenv').config();

const db = require("mongoose");
const Model = require("./model");
const chalk = require("chalk");

const USER=process.env.DB_USER
const PASS=process.env.DB_PASS
const DB_NAME=process.env.DB_NAME

const uri =`mongodb://${USER}:${PASS}@${DB_NAME}/<dbname>?ssl=true&replicaSet=atlas-6j83hy-shard-0&authSource=admin&retryWrites=true&w=majority`;

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(chalk.cyan("[db] Conectada con éxito")))
  .catch((err) => console.error("[db]", err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get
  //update
  //delete
};
