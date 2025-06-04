const express = require('express');
const router = express.Router();
const osController = require('../controllers/osController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, osController.getAll);

module.exports = router;
