const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    seater: {
      type: String,
      required: true,
    },
    bookingFee: {
      type: String,
      required: true,
    },
    freeDistance: {
      type: String,
      required: true,
    },
    excessKM: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Checkout = mongoose.model("checkout", checkoutSchema);

module.exports = Checkout;
