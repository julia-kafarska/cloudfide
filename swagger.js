import swaggerJSDoc = require('swagger-jsdoc');
import * as swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: ' API',
      version: '1.0.0',
      description: 'API',
    },
  },
  apis: ['./src/routes/**/*.ts'],
};

export const setupSwagger = (app) => {
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  console.log('Swagger setup initialized'); // Debug log

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  console.log(
      `Swagger UI should be available at: http://localhost:${process.env.PORT || 5000}/docs`
  );
};
