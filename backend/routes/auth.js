const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Checking Validation using express-validator
//Create a USer Using POST : '/api/auth/createuser' -> No LOgin Require
router.post(
    "/createuser",
    [
        body("name", "Enter a Valid Name").isLength({ min: 3 }),
        body("email", "Enter a Valid Email").isEmail(),
        body("password", "Password must be atleast 5 characters").isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        //If there are errors, return Bad Request & the Errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //Check Whether the user with this email exists already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a User with Email ALready Exists" });
            }
            //Creating a New User using Express-Validation
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            res.json(user); //Displaying record in response body
        } catch (error) {
            console.error(error.mesaage);
            res.status(500).send("Some Error Occured");
        }
    });

module.exports = router;
