const mongoose = require("mongoose");

//MongoDB URL
const url = "mongodb+srv://jesusp1490:Bajo141590-@cluster0.ahfdhot.mongodb.net/JuegosSteam?retryWrites=true&w=majority"

const connectDb = async () => {
    try {
        //intenta conectarte a la base de datos
        const dataBase = await mongoose.connect(url, {
            useNewUrlParser : true,            
            useUnifiedTopology : true,
    })
        const {name, host} = dataBase.connection;
        console.log(`Connected to ${name} DB in host:${host}`);

    } catch (error) {
        console.log("I have an error",error);
    }
}

module.exports = { connectDb }; 