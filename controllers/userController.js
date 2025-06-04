const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, username, role FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
