const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Test = mongoose.model("test", testSchema);
module.exports = Test;
