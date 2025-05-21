import swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: " API",
      version: "1.0.0",
      description: "API",
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./controllers/api_v1/*.js"],
};

export const setupSwagger = (app) => {
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  console.log("Swagger setup initialized"); // Debug log

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
