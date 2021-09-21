const { request, response } = require("express");
const express = require("express");

const router = express.Router();

const Checkout = require("../models/checkout.model");

router.get("/", async (request, response) => {
  try {
    let checkedOut = await Checkout.find()
      .sort({ _id: -1 })
      .limit(1)
      .lean()
      .exec();
    return response.send(checkedOut);
  } catch (err) {
    return response.send(err.message);
  }
});

router.post("/", async (request, response) => {
  try {
    let checkedOut = await Checkout.create(request.body);
    return response.send(checkedOut);
  } catch (err) {
    return response.send(err.message);
  }
});

module.exports = router;
