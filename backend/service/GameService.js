let gameModel = require('../models/GameModel');

const GameService = {
   listAll: () => {
        const allGames = gameModel.findAll();
        
        allGames.sort((a,b) => a.name.localeCompare(b.name));
    
        return allGames;
   },

   addGame: (gameData) => {
        const newGame = {
            id: gameModel.length + 1, 
            name: gameData.name,
            price: gameData.price
        };

        const addedGame = gameModel.push(newGame)

        return addedGame;
   }
}

module.exports = GameService;
