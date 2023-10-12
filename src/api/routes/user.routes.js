const express = require('express');

const { registerUser, loginUser, profileUser } = require('../controllers/user.controller');
// const { isAuth } = require('../')
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/profile', [isAuth], profileUser);

module.exports = router;