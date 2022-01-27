const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE - 1
// Get All the Notes Using Get : '/api/auth/getuser' -> Login Require
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
// Adding a new Note Using Post : '/api/auth/addnote' -> Login Require
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
                title, description, tag, user: req.user.id
            })
            const savedNote = await notes.save();
            res.json(savedNote);
        } catch (error) {
            console.error(error.mesaage);
            res.status(500).send("Internal Server Error");
        }
    }

);

module.exports = router;
