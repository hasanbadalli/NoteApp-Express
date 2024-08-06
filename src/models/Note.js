const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Note;
