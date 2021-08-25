const express = require("express");

const router = express.Router();
const Test = require("../models/test.model");

router.post("", async function (req, res) {
  try {
    const test = await Test.create(req.body);
    return res.send(test);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("", async function (req, res) {
  try {
    const tests = await Test.find().lean().exec();
    return res.send(tests);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
