const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const testController = require("./controllers/test.controller");
const userController = require("./controllers/user.controller");
const carsController = require("./controllers/car.controller");
const checkoutController = require("./controllers/checkout.controller");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/tests", testController);
app.use("/users", userController);
app.use("/cars", carsController);
app.use("/checkout", checkoutController);

app.listen(4321, async () => {
  await connect();
  console.log("Listening on port 4321");
});
