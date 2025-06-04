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

module.exports = router;
