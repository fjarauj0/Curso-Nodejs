const chalk = require("chalk");
const store = require("./store");

function addMessage(chat, user, message) {
  console.log(chalk.bgBlue("--controller--"));
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error(chalk.red("[messageController] No hay usuario o mensaje"));
      reject("Los datos son incorrectos");
      return false;
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Datos invalidos");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Parametros o id invalido");
      return false;
    }
    store
      .removeMessage(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
