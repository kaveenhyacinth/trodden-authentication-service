const Nomad = require("../models/Nomad");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// Check for existing emails
const checkEmail = (req, res, next) => {
  const { email } = req.body;
  Nomad.findOne({ email }).then((user) => {
    if (user)
      return res
        .status(400)
        .json({ msg: "User with this email already exists" });
    next();
  });
};

// Check for existing usernames
const checkUsername = (req, res, next) => {
  const { username } = req.body;
  Nomad.findOne({ username }).then((user) => {
    if (user)
      return res
        .status(400)
        .json({ msg: "User with this username already exists" });
    next();
  });
};

// Signup a user
const signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json(errors);

  const { firstName, lastName, username, email, password } = req.body;

  const nomad = new Nomad({
    first_name: firstName,
    last_name: lastName,
    username,
    email,
    password,
  });

  nomad
    .save()
    .then(() => res.json({ msg: "Welcome to Trodden" }))
    .catch((err) =>
      res.status(400).json({
        err,
        msg: "Error occured while signing up. Please try again!",
      })
    );
};

module.exports = {
  checkEmail,
  checkUsername,
  signup,
};
