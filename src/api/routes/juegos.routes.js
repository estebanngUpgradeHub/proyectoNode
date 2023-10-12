const express = require('express');

const {newGame, getGames} = require('../controllers/juegos.controller'); 

const router = express.Router();

router.post('/register', newGame);

router.get('./', getGames);

module.exports = router