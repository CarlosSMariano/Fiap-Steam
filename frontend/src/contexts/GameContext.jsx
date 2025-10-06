import { createContext, useEffect, useState } from "react";
export const GameContext = createContext();

export function GameProvider({children}) {
    const [games, setGames] = useState([]);
    const [error, setErrors] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/games")
    .then((response) => {  
        if (!response.ok) {
            throw new Error("Erro ao buscar games");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Games recebidos: " + data);
        setGames(data);
    })
    .catch((error) => {
      console.error("Erro ao buscar games: " + error);
      setErrors(error.message) 
    });
}, [])

const addGame = (newGame) => {
    fetch("http://localhost:5000/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify(newGame)
    })
    .then((response) => { 
        if (!response.ok) {
            throw new Error("Erro ao adicionar game");
        }
        return response.json() })
    .then((newDataGame) => {
        setGames([...games,newDataGame])
    })
    .catch((error) => {
        console.error("Erro ao adicionar game: " + error)
        setErrors(error.message);
    });
}

const value = {
    games, 
    error, 
    addGame
};

return(
    <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
)
}