const pool = require('../config/db');

exports.getStats = async (_req, res) => {
  try {
    const salesResult = await pool.query(
      'SELECT COALESCE(SUM(total), 0) AS total FROM sales WHERE DATE(created_at) = CURRENT_DATE'
    );
    const stockResult = await pool.query(
      'SELECT COUNT(*) AS total FROM stock_entries WHERE DATE(date) = CURRENT_DATE'
    );
    const workResult = await pool.query(
      "SELECT COUNT(*) AS total FROM work_orders WHERE status = 'in_progress'"
    );
    const cashResult = await pool.query(
      'SELECT balance FROM cashbox ORDER BY id DESC LIMIT 1'
    );

    res.json({
      dailySales: salesResult.rows[0]?.total || 0,
      stockEntriesToday: parseInt(stockResult.rows[0]?.total, 10) || 0,
      workOrdersInProgress: parseInt(workResult.rows[0]?.total, 10) || 0,
      currentCash: cashResult.rows[0]?.balance || 0,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
