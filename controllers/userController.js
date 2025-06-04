const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, username, role FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id',
      [username, password, role]
    );
    res.json({ id: rows[0].id, username, role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
