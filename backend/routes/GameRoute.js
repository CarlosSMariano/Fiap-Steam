const express = require('express');

const router = express.Router();

let{listGames, addGame} = require('../controllers/GameController');

router.get('/games', listGames);

router.post('/games', addGame);

module.exports = router;