const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'VillainIsTheBest';

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

        try {
            //Check Whether the user with this email exists already
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a User with Email ALready Exists" });
            }

            const salt = await bcrypt.genSalt(10); //Adding Salt after HAsing
            const secPass =await bcrypt.hash(req.body.password,salt)  //Hashing the password and adding salt to it

            //Creating a New User using Express-Validation
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password:secPass,
            });
            
            //Generating Token using JWT
            const data = {
                user :{
                    id : user.id
                }
            }
            const authToken = jwt.sign(data,JWT_SECRET);
            

            res.json({authToken}); //Generating token for client
            // res.json(user);// Displaying record in response body
        } catch (error) {
            console.error(error.mesaage);
            res.status(500).send("Some Error Occured");
        }
    });

module.exports = router;
