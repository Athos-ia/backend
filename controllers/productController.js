const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const { name, price } = req.body;
  try {
    const [result] = await pool.execute('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
    res.json({ id: result.insertId, name, price });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
