require("../database");
const User = require("./User");
const Note = require("./Note");

User.hasMany(Note, { foreignKey: "userId", onDelete: "CASCADE" });
Note.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Note,
};
