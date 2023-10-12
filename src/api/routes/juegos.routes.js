const express = require('express');

const {newGame, getGames, updateGame, deleteGame} = require('../controllers/juegos.controller'); 

const router = express.Router();

router.post('/register', newGame);
router.delete('/:id', deleteGame);
router.put('/:id', updateGame);
router.get('/', getGames);


module.exports = router