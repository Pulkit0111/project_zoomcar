const { response } = require("express");
const express = require("express");

const router = express.Router();

const Car = require("../models/car.model");

// router.use(cors());

router.get("/", async (request, response) => {
  try {
    let carsList = await Car.find().sort({ _id: 1 }).lean().exec();
    return response.send(carsList);
  } catch (err) {
    return response.send(err.message);
  }
});

router.post("/", async (request, response) => {
  try {
    let newCar = await Car.create(request.body);
    return response.send(newCar);
  } catch (err) {
    return response.send(err.message);
  }
});

/*router.patch("/fuel/:value", async (request, response) => {
  try {
    let value = request.params.value;
    let temp = await Car.updateMany(
      { fuelRatio: { $ne: 0 } },
      { $set: { fuelRatio: value } }
    );
    return response.send(temp);
  } catch (err) {
    return response.send(err.message);
  }
});*/

router.patch("/:id", async (request, response) => {
  try {
    let updated = await Car.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    return response.send(updated);
  } catch (err) {
    return response.send(err.message);
  }
});

module.exports = router;
