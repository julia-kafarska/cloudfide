import express from "express";
import dotenv from "dotenv";
import v1 from "./controllers/api_v1/index.js";
import { setupSwagger } from "./swagger.js";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
}); // 100 REQUESTS PER MINUTE

const app = express();
setupSwagger(app); // Add Swagger setup here
dotenv.config();
const port = 3000;

app.use(limiter);
app.use("/api/v1", v1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
