const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

const getAllUsers = async () => {
  const users = await Model.find();
  return users;
};

module.exports = {
  add: addUser,
  list: getAllUsers,
};
