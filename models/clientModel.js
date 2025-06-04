const pool = require('../config/db');

exports.getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM clients');
  return rows;
};

exports.create = async (name, email) => {
  const { rows } = await pool.query(
    'INSERT INTO clients (name, email) VALUES ($1, $2) RETURNING id',
    [name, email]
  );
  return rows[0];
};
