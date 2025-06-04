const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const auth = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/sales:
 *   get:
 *     summary: Retrieve all sales
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of sales
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', auth, saleController.getAll);

module.exports = router;
