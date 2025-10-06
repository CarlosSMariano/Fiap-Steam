//Simulação do banco de dados da loja
let games = [
    {id: 1, name: "Hollow Knight", price: 30.00},
    {id: 2, name: "Hollow Knight: Silksong", price: 60.00},
    {id: 3, name: "Ghost of Tsushima", price: 300.00},
    {id: 4, name: "Ghost of Yotei", price: 400.00}
];

const GameModel = {
    findAll: () => {
        return games;
    }, 

    add: (newGame) => {
        games.push(newGame);
        return newGame;
    }
}
module.exports = GameModel;