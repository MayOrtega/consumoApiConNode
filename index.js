const express = require('express');
const usersRouter = require('./router/users');
const drinksRouter = require('./router/drink');

const app = express();
const port = 3000;

app.use('/users',usersRouter);
app.use('/drinks',drinksRouter);

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
});