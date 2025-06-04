const express = require('express');
const router = express.Router();
const osController = require('../controllers/osController');
const auth = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: OS
 *   description: Service order endpoints
 */

/**
 * @swagger
 * /api/os:
 *   get:
 *     tags:
 *       - OS
 *     summary: Retrieve all service orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of service orders
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', auth, osController.getAll);

/**
 * @swagger
 * /api/os:
 *   post:
 *     tags:
 *       - OS
 *     summary: Create a service order
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Created service order
 */
router.post('/', auth, osController.create);

module.exports = router;
