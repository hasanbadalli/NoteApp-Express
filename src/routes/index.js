const express = require("express");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const noteRouter = require("./note.router");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", (req, res) => res.json({ hello: "world" }));

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/notes", authMiddleware, noteRouter);

module.exports = router;
