let gameService = require('../service/GameService');

const listGames = (req, res) => {
    try {
        res.status(200).json(gameService.listAll());
    }catch(error){
        res.status(500).json({message: "Erro ao listar jogos: "+ error.message})
    }
}

const addGame = (req, res) => {
    try {
        res.status(201).json(gameService.addGame(req.body));
    }catch(error){
         res.status(400).json({message: "Erro ao cadastrar jogo:"+ error.message})
    }
}

module.exports = {listGames, addGame}