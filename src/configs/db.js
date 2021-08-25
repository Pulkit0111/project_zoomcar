const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://pulkit:Tyagi@1234@cluster0.g89l0.mongodb.net/zoomcar?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
