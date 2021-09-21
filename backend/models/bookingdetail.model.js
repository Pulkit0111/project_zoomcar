const mongoose = require("mongoose");

const bookingDetailSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
    },
    enddate: {
      type: String,
      required: true,
    },
    startmonth: {
      type: String,
      required: true,
    },
    endmonth: {
      type: String,
      required: true,
    },
    starttime: {
      type: String,
      required: true,
    },
    endtime: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BookingDetail = mongoose.model("bookingdetail", bookingDetailSchema);

module.exports = BookingDetail;
