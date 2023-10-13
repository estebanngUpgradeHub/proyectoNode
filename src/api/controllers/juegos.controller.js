const Juegos = require('../models/juegos.model');

//Post
const newGame = async (req, res) => {
    try {
        const body = req.body
        const game = new Juegos(body);
        if (req.file.path) {
            game.image = req.file.path;
        }
        const createdGame = await game.save();
        return res.status(201).json(createdGame);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Get
const getGames = async (req, res) => {
    try {
        const allGames = await Juegos.find();
        return res.status(200).json(allGames)
    } catch (error) {
        return res.json(error)
}
}

//Put
const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const gameBody = {...req.body};
        gameBody._id = id;

        if (req.file && req.file.path) {
            gameBody.image = req.file.path;
        } 

        const updateGame = await Juegos.findByIdAndUpdate(id, gameBody, { new: true });
           
    if (!updateGame) {
        return res.status(404).json({ message: "Game does not exist" })
    }
    return res.status(200).json(updateGame)
} catch (error) {
    console.error(error); // Log the error for debugging.
    return res.status(500).json({ message: "Internal Server Error" });
}
}

//Delete
const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteGame = await Movies.findByIdAndDelete(id);
        if (!deleteGame) {
            return res.status(404).json({ message: "Game does not exist" })
        }
        return res.status(200).json(deleteGame)

    } catch (error) {

    }
}

//Get by title
const getGameByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const titleGames = await Juegos.find({ title: title });
        return res.status(200).json(titleGames);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Get by Genre
const getGameByGenre = async (req, res) => {
    try {
        const { genre } = req.params
        const genreGames = await Juegos.find({ genre: { $regex: new RegExp(genre, 'i') } });
        return res.status(200).json(genreGames);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Get by Price
const getUnderFive = async (req, res) => {
    try {
        const allGames = await Juegos.find();
        const priceUnderFive = [];

        for (const game of allGames) {
            if (game.price < 5)
            priceUnderFive.push(game);
        }
        return res.status(200).json(priceUnderFive);

    } catch (error) {

        return res.status(500).json(error);
    }
}


module.exports = { newGame, getGames, updateGame, deleteGame, getGameByTitle, getGameByGenre, getUnderFive };
