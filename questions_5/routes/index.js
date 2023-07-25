const express = require('express');
const UsersController = require('../controllers/usersController');
const router = express.Router()

router.post('/register_user', UsersController.createNewUser);
router.post('/login', UsersController.loginUser);

module.exports = router;