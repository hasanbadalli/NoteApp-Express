const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
