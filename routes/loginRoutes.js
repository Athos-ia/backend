const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Login
 *     summary: Authenticate user and return JWT and refresh tokens
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /api/refresh:
 *   post:
 *     tags:
 *       - Login
 *     summary: Refresh JWT using a refresh token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: New authentication tokens
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       400:
 *         description: Refresh token required
 *       401:
 *         description: Invalid refresh token
 */
router.post('/refresh', authController.refreshToken);

module.exports = router;
