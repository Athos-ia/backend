const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, productController.getAll);
router.post('/', auth, productController.create);

module.exports = router;
