import React from 'react'
import Adicionar from './Adicionar'
import Produtos from './Produtos';
import {GameContext} from "../contexts/GameContext"
import { useState, useEffect, useContext } from 'react';



function Catalogo(){
    
    const [carrinho, setCarrinho] = useState([]);
    const [resetButtons, setResetButtons] = useState(false);
    const { games, gameError, addGame } = useContext(GameContext);

    function onSetGame(gameTitulo, gamePreco){
        const novoItem = {titulo: gameTitulo, preco : gamePreco}
        setCarrinho( [...carrinho,novoItem])
    }

     
    const handleBuy = () => {
        setCarrinho([]); 
        setResetButtons(true);
    };

    
    useEffect(() => {
        if (resetButtons) {
            setResetButtons(false); 
        }
    }, [resetButtons]);

    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

    return (
        <>
            <div className='flex justify-center items-center space-x-44'>
                <div>
                    <h3 className="text-[#91a3ad] text-[23px] font-bold ">Lista de Jogos:</h3>
                        <div className='py-5 px-4'>
                            {games.map((game) => (
                                <div className='flex justify-between items-center mt-3 space-x-2'>
                                    <Produtos key={game.id}>{game.name}</Produtos>
                                    <Adicionar reset={resetButtons} onClick={() => onSetGame(game.name, game.price)}>+</Adicionar>
                                </div>
                            ))}
                        </div>  
                </div>
                <div  className='block'>
                    <h3 className="text-[#7d7d7d] text-[23px] font-bold">Carrinho:</h3>
                    <div className='py-5 px-4'>
                    {carrinho.map((item, index) => (
                            <Produtos key={index}>{item.titulo} - R${item.preco},00</Produtos>
                        ))}
                    </div>
                    <div>
                        <h3 className='text-[27px] text-[#ed145b] font-extrabold'>
                            Total - R${total}
                        </h3>
                    </div>
                     <button 
                    onClick={handleBuy} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Comprar
                </button>
                </div>
            </div>
            
        </>
            
    
    )
}

export default Catalogo