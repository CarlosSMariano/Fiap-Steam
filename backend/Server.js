const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const gameRoute = require('./routes/GameRoute');

app.use('/games', gameRoute);

const PORT = 5000; 

app.listen(PORT, ()=>{
    console.log('Servidor rodando na porta: '+ PORT)
})