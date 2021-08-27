const express = require("express");
const Popularpoints = require("../models/popularpoints.model");
const router = express.Router();

router.get("/:city", async (request, response) => {
  try {
    let cityName = request.params.city;
    let popularplaceslist = await Popularpoints.find({ city: cityName })
      .lean()
      .exec();
    // popularplaceslist = JSON.parse(popularplaceslist);
    return response.send(popularplaceslist);
  } catch (error) {
    return response.send(error);
  }
});

router.post("/", async (request, response) => {
  try {
    // console.log("body:", request.body);
    let popularplaceslist = await Popularpoints.create(request.body);
    // console.log("popularplaceslist:", popularplaceslist);

    return response.send(popularplaceslist);
  } catch (error) {
    return response.send(error);
  }
});

router.get("/", async (request, response) => {
  try {
    let popularplaceslist = await Popularpoints.find().lean().exec();
    // console.log("popularplaceslist:", popularplaceslist);
    return response.send(popularplaceslist);
  } catch (error) {
    return response.send(error);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    let deleted = await Popularpoints.findByIdAndDelete(request.params.id);
    return response.send(deleted);
  } catch (error) {
    return response.send(error);
  }
});

module.exports = router;
