let gameModel = require('../models/GameModel');

const GameService = {
   listAll: () => {
        return gameModel.findAll();
   },

   addGame: (gameData) => {
        const addedGame = gameModel.add(gameData)
        return addedGame;
   }
}

module.exports = GameService;
