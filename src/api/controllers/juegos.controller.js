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

const getGames = async (req, res) => {
    try {
        const allGames = await Juegos.find();
        return res.status(200).json(allGames)
    } catch (error) {
        return res.json(error)
}
}



module.exports = { newGame, getGames };

//holi