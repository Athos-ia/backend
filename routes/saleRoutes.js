const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const auth = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Sales
 *   description: Sales management endpoints
 */

/**
 * @swagger
 * /api/sales:
 *   get:
 *     tags:
 *       - Sales
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

/**
 * @swagger
 * /api/sales:
 *   post:
 *     tags:
 *       - Sales
 *     summary: Create a sale
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               total:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Created sale
 */
router.post('/', auth, saleController.create);

module.exports = router;
