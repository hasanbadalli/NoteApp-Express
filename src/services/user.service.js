const { User } = require("../models");
const { hashPassword } = require("../utils/bcrypt.util");

const createUser = async (params) => {
  const { username, password } = params;

  let existsUser = await findByUsername(username);
  if (existsUser) throw new Error("User already exists");

  const hash = await hashPassword(password);

  let user = await User.create({
    username,
    password: hash,
  });

  return user;
};

const findAll = async () => {
  const users = await User.findAll();
  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const findByUsername = async (username) => {
  let user = await User.findOne({ where: { username } });
  return user;
};

module.exports = {
  createUser,
  findAll,
  findById,
  findByUsername,
};
