const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, clientController.getAll);

module.exports = router;
