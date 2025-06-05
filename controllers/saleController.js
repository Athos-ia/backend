const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM sales');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const { product_id, quantity, total } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO sales (product_id, quantity, total) VALUES ($1, $2, $3) RETURNING id',
      [product_id, quantity, total]
    );
    res.json({ id: rows[0].id, product_id, quantity, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
