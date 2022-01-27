const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE - 1
// Get All the Notes Using Get : '/api/notes/getuser' -> Login Require
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.mesaage);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE - 2
// Adding a new Note Using Post : '/api/notes/addnote' -> Login Require
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //If there are errors, return Bad Request & the Errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const notes = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await notes.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.mesaage);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE - 3
// Update an existing Note Using PUT : '/api/notes/updatenote' -> Login Require
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //Create a NewNote Object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //Find the Note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    //Allow Updation only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.mesaage);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE - 3
// Delete an existing Note Using DELETE : '/api/notes/updatenote' -> Login Require
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //Find the Note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    //Allow Deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note Has Been Deleted ", note: note });
  } catch (error) {
    console.error(error.mesaage);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
