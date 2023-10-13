const express = require('express');

const {newGame, getGames, updateGame, deleteGame, getGameByTitle, getGameByGenre, getUnderFive } = require('../controllers/juegos.controller'); 

const router = express.Router();
const upload = require("../../middleware/upload.file");

router.post('/register',upload.single("image"), newGame);
router.delete('/:id', deleteGame);
router.put('/:id', updateGame);
router.get('/title/:title', getGameByTitle);
router.get('/genre/:genre', getGameByGenre);
router.get('/priceUnderFive', getUnderFive);
router.get('/', getGames);


module.exports = router