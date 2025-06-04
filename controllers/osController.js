const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM service_orders');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const { description } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO service_orders (description) VALUES ($1) RETURNING id',
      [description]
    );
    res.json({ id: rows[0].id, description });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
