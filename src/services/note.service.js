const { NotFoundError } = require("../errors");
const { Note } = require("../models");

const findUserNotes = async (userId) => {
  const notes = await Note.findAll({ where: { userId } });
  return notes;
};

const findUserNote = async (noteId, userId) => {
  const note = await Note.findOne({ where: { id: noteId, userId: userId } });
  return note;
};

const createNote = async (params) => {
  const { title, description, userId } = params || {};

  let note = await Note.create({ title, description, userId });

  return note;
};

const updateNote = async (params) => {
  const { title, description, noteId, userId } = params || {};

  let note = await findUserNote(noteId, userId);
  if (!note) throw new NotFoundError("Note is not found");

  let updatedNote = await Note.update(
    { title, description },
    { where: { id: note.id } }
  );

  return updatedNote;
};

const deleteNote = async (params) => {
  const { noteId, userId } = params || {};

  let note = await findUserNote(noteId, userId);

  if (!note) throw new NotFoundError("Note is not found");

  await Note.destroy({ where: { id: note.id } });
  return true;
};

module.exports = {
  findUserNotes,
  createNote,
  updateNote,
  deleteNote,
};
