const Juegos = require('../models/juegos.model');

//Post
const newGame = async (req, res) => {
    try {
        const game = new Juegos(req.body);
        const createdGame = await game.save();
        return res.status(201).json(createdGame);
    } catch (error) {
        return res.status(500).json(error);
    }
};





module.exports = { newGame };