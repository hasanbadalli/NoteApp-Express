const express = require("express");
const { authController } = require("../controllers");
const {
  validationMiddleware,
} = require("../middlewares/validation.middleware");
const { authSchema } = require("../schema");

const router = express.Router();

router.post(
  "/login",
  validationMiddleware(authSchema.login),
  authController.singIn
);

module.exports = router;
