const { Pool } = require('pg');
require('dotenv').config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

if (process.env.DB_PORT) {
  config.port = process.env.DB_PORT;
}

const pool = new Pool(config);

module.exports = pool;
