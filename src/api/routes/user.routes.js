const express = require('express');

const { registerUser, loginUser, profileUser, allUsers } = require('../controllers/user.controller');
const { isAuth } = require('../../middleware/auth')
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', [isAuth], profileUser);
router.get('/', allUsers);

module.exports = router;