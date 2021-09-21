const mongoose = require("mongoose");

const popularcitySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Popularcity = mongoose.model("othercities", popularcitySchema);

module.exports = Popularcity;
