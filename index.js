const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.use("/api/v1", require("./controllers/api_v1"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
