const pool = require('../config/db');

exports.getAll = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM clients');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
