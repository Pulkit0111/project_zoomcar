const express = require("express");

const BookingDetail = require("../models/bookingdetail.model");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    let details = await BookingDetail.find()
      .sort({ _id: -1 })
      .limit(1)
      .lean()
      .exec();
    return response.send(details);
  } catch (err) {
    return response.send(err.message);
  }
});

router.post("/", async (request, response) => {
  try {
    let details = await BookingDetail.create(request.body);
    return response.send(details);
  } catch (err) {
    return response.send(err.message);
  }
});

module.exports = router;
