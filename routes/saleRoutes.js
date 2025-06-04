const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, saleController.getAll);

module.exports = router;
