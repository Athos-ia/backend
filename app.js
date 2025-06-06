const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes');
const saleRoutes = require('./routes/saleRoutes');
const osRoutes = require('./routes/osRoutes');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', loginRoutes);
app.use('/api/products', productRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/os', osRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

module.exports = app;
