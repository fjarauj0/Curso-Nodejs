const chalk = require("chalk");

function addMessage(user, message) {
  console.log(chalk.bgBlue("--controller--"));
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error(chalk.red("[messageController] No hay usuario o mensaje"))
      reject("Los datos son incorrectos");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

module.exports = {
  addMessage,
};
