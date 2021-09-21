const mongoose = require("mongoose");

const popularcitySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Popularcity = mongoose.model("popularcity", popularcitySchema);

module.exports = Popularcity;
