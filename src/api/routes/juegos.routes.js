const express = require('express');

const {} = require('../controllers/juegos.controller'); 

const router = express.Router();

router.post('/register', newGame);

module.exports = router