const express = require('express');
const { connectDb } = require('./src/utils/database');
const routeJuegos = require('./src/api/routes/juegos.routes')
const routeUsers = require('./src/api/routes/user.routes')
const env = require('dotenv');
env.config();

const cloudinary = require("cloudinary").v2;
const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET, 
});


connectDb()
app.use(express.json());
app.use('/juegos', routeJuegos);
app.use('/users', routeUsers);

const PORT = 5051;
app.listen(PORT, () => {
    console.log('escuchando por el puerto ' + PORT);
});