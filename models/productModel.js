const pool = require('../config/db');

exports.getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
};

exports.create = async (name, price) => {
  const { rows } = await pool.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id',
    [name, price]
  );
  return rows[0];
};
