const pool = require('../config/db');

exports.findByUsername = async (username) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};
