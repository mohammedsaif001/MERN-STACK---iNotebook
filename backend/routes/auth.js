const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "VillainIsTheBest";

// Checking Validation using express-validator
//ROUTE - 1
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
        return res
          .status(400)
          .json({ error: "Sorry a User with Email ALready Exists" });
      }

      const salt = await bcrypt.genSalt(10); //Adding Salt after HAsing
      const secPass = await bcrypt.hash(req.body.password, salt); //Hashing the password and adding salt to it

      //Creating a New User using Express-Validation
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //Generating Token using JWT
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken }); //Generating token for client
      // res.json(user);// Displaying record in response body
    } catch (error) {
      console.error(error.mesaage);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE - 2
// AUthenticate a USer Using POST : '/api/auth/login' -> No LOgin Require
router.post(
  "/login",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password Can't be Blank").exists(),
  ],
  async (req, res) => {
    //If there are errors, return Bad Request & the Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Login With Correct Credentials!!!" });
      }

      const pwdCompare = await bcrypt.compare(password, user.password); //Comapring password of user input and the one stored in DB
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ error: "Login With Correct Credentials!!!" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.mesaage);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE - 3
// Get LoggedIn User Details Using POST : '/api/auth/getuser' -> Login Require
router.post(
  "/getuser",fetchuser,
    async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password"); //Excluding Password
      res.send(user);
    } catch (error) {
      console.error(error.mesaage);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
