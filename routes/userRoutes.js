const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const permissoes = require('../middleware/permissoesMiddleware');

router.get('/', auth, permissoes('admin'), userController.getAll);

module.exports = router;
