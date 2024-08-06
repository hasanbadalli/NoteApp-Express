const { NotFoundError } = require("../errors");
const { authSchema } = require("../schema");
const { authService } = require("../services");

const singIn = async (req, res, next) => {
  try {
    const params = req.body;
    let result = await authService.login(params);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  singIn,
};
