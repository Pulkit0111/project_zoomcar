const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const testController = require("./controllers/test.controller");
const carsController = require("./controllers/car.controller");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/tests", testController);
app.use(cors());
app.use("/cars", carsController);

app.listen(4321, async () => {
  await connect();
  console.log("Listening on port 4321");
});
