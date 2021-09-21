const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    seatImage: {
      type: String,
      required: true,
    },
    seater: {
      type: String,
      required: true,
    },
    transmissionType: {
      type: String,
      required: true,
    },
    transmissionImage: {
      type: String,
      required: true,
    },
    luggageImage: {
      type: String,
      required: true,
    },
    luggageSize: {
      type: String,
      required: true,
    },
    driverAge: {
      type: String,
      required: true,
    },
    pickUpDistance: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    costRatio: {
      type: Number,
      required: true,
    },
    freeDistance: {
      type: Number,
      required: true,
    },
    fuelRatio: {
      type: Number,
      required: true,
    },
    doorDelivery: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Car = mongoose.model("car", carSchema);

module.exports = Car;
