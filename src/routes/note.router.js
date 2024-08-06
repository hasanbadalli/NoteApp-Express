const express = require("express");
const { noteController } = require("../controllers");

const router = express.Router();

router.get("/", noteController.findAll);
router.post("/", noteController.createNote);
router.post("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
