const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API',
      version: '1.0.0',
    },
    tags: [
      { name: 'Login', description: 'Endpoints for user authentication' },
      { name: 'Products', description: 'Product management endpoints' },
      { name: 'Clients', description: 'Client management endpoints' },
      { name: 'Sales', description: 'Sales management endpoints' },
      { name: 'OS', description: 'Service order endpoints' },
      { name: 'Users', description: 'User management endpoints' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJsDoc(options);
