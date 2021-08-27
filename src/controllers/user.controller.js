const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("", async function (req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("", async function (req, res) {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
