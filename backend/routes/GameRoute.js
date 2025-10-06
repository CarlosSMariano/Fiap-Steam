const express = require('express');

const router = express.Router();

let{listGames, addGame} = require('../controllers/GameController');

router.get('/', listGames);

router.post('/', addGame);

module.exports = router;