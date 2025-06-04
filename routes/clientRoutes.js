const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const auth = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Retrieve all clients
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of clients
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', auth, clientController.getAll);

module.exports = router;
