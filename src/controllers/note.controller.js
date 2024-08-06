const { noteService } = require("../services");

const findAll = async (req, res, next) => {
  try {
    const { user } = req;

    const notes = await noteService.findUserNotes(user.id);
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

const createNote = async (req, res, next) => {
  try {
    const { user } = req;
    let params = { ...req.body, userId: user.id };

    let result = await noteService.createNote(params);

    res.json({
      message: "Note is created successfully",
      note: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateNote = async (req, res, next) => {
  try {
    const { user } = req;
    let params = { ...req.body, noteId: req.params.id, userId: user.id };

    let result = await noteService.updateNote(params);

    res.json({
      message: "Note is updated successfully",
      note: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteNote = async (req, res) => {
  try {
    const { user } = req;

    await noteService.deleteNote({
      noteId: req.params.id,
      userId: user.id,
    });

    res.json({
      message: "Note is deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

module.exports = {
  findAll,
  createNote,
  deleteNote,
  updateNote,
};
