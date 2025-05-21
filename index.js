import express from "express";
import dotenv from "dotenv";
import "./swagger.js";
import v1 from "./controllers/api_v1/index.js";

const app = express();
dotenv.config();
const port = 3000;

app.use("/api/v1", v1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
