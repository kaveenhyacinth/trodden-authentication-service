const Nomad = require("../models/Nomad");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// Signup a user
const signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json(errors);

  const { firstName, lastname, username, email, password } = req.body;

  const nomad = new Nomad({
    first_name: firstName,
    last_name: lastname,
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
  signup,
}
