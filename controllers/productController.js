const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const { name, price } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id',
      [name, price]
    );
    res.json({ id: rows[0].id, name, price });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
