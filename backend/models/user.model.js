const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
