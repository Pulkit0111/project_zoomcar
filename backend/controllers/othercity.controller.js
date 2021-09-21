const { request } = require("express");
const express = require("express");
const Othercity = require("../models/othercity.model");
const router = express.Router();

router.post("/", async (request, response) => {
  try {
    let newCity = await Othercity.create(request.body);
    return response.send(newCity);
  } catch (error) {
    return response.send(error.message);
  }
});

router.get("/", async (request, response) => {
  try {
    let cities = await Othercity.find().lean().exec();
    return response.send(cities);
  } catch (error) {
    return response.send(error.message);
  }
});

module.exports = router;
