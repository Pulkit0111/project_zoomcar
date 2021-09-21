const mongoose = require("mongoose");

const popularPointsSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    popular_places: [
      {
        type: String,
        required: true,
      },
    ],
    airports: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Popularpoints = mongoose.model("popularpoint", popularPointsSchema);

module.exports = Popularpoints;
