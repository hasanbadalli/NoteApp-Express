const { userService } = require("../services");

const createUser = async (req, res) => {
  let user = await userService.createUser(req.body);
  res.json({
    status: true,
    message: "User created",
    user,
  });
};

const findAll = async (req, res) => {
  let users = await userService.findAll();

  res.json(users);
};

module.exports = {
  createUser,
  findAll,
};
