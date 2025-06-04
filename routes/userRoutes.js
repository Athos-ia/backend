const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const permissoes = require('../middleware/permissoesMiddleware');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve all users (admin only)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Server error
 */
router.get('/', auth, permissoes('admin'), userController.getAll);

module.exports = router;
