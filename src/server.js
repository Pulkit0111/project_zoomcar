const express = require("express");
const connect = require("./configs/db");
const testController = require("./controllers/test.controller");
const app = express();
app.use(express.json());
app.use("/tests", testController);

app.listen(4321, async () => {
  await connect();
  console.log("Listening on port 4321");
});
