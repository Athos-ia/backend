const pool = require('../config/db');

exports.getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM service_orders');
  return rows;
};

exports.create = async (description) => {
  const { rows } = await pool.query(
    'INSERT INTO service_orders (description) VALUES ($1) RETURNING id',
    [description]
  );
  return rows[0];
};
