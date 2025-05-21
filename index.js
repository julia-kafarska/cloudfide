const express = require("express");
const v1 = require("./controllers/api_v1");

const app = express();
require("dotenv").config();
const port = 3000;

app.use("/api/v1", v1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
