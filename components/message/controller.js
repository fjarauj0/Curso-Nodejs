const chalk = require("chalk");
const store = require("./store");

function addMessage(user, message) {
  console.log(chalk.bgBlue("--controller--"));
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error(chalk.red("[messageController] No hay usuario o mensaje"));
      reject("Los datos son incorrectos");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getMessages
};
