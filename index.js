const express = require('express');
const {connectDb} = require('./src/utils/database');
const routeJuegos = require('./src/api/routes/juegos.routes')
const routeUser = require('./src/api/routes/user.routes')


const app = express();
connectDb()
app.use(express.json());
app.use('/juegos', routeJuegos);
app.use('/users', routeUsers);

const PORT = 5051;
app.listen(PORT, () => {
console.log('escuchando por el puerto ' + PORT);
});