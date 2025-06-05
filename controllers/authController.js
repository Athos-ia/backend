const jwt = require('jsonwebtoken');
const pool = require('../config/db');
require('dotenv').config();

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const user = rows[0];
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, refreshToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token required' });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const token = jwt.sign(
      { id: decoded.id, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    const newRefreshToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, refreshToken: newRefreshToken });
  } catch (err) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
};
