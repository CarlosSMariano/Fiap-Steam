import React from 'react'
import Adicionar from './Adicionar'
import Produtos from './Produtos';
import {GameContext} from "../contexts/GameContext"
import { useState, useEffect, useContext } from 'react';



function Catalogo(){
    
    const [carrinho, setCarrinho] = useState([]);
    const [resetButtons, setResetButtons] = useState(false);
    const { games, addGame } = useContext(GameContext);
    const [newGame, setNewGame] = useState({name: null, price: null});

    function onSetGame(gameTitulo, gamePreco){
        const novoItem = {titulo: gameTitulo, preco : gamePreco}
        setCarrinho( [...carrinho,novoItem])
    }

     
    const handleBuy = () => {
        setCarrinho([]); 
        setResetButtons(true);
    };

    const handleChange = (e) => {
        const value = e.target.name === 'price' ? Number(e.target.value) : e.target.value;
        setNewGame({...newGame,[e.target.name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addGame({name: newGame.name, price: newGame.price})

        setNewGame({name: null, price: null});
    }

    
    useEffect(() => {
        if (resetButtons) {
            setResetButtons(false); 
        }
    }, [resetButtons]);

    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

    return (
        <>
            <div className="flex justify-center items-center px-3.5">
                <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                    <div className="flex space-x-4 items-center"> 
                        <input 
                            type="text" 
                            name="name"
                            value={newGame.name} 
                            onChange={handleChange} 
                            placeholder='Digite o nome do jogo...'
                            className="
                                border border-gray-300 p-2 rounded 
                                focus:outline-none focus:ring-0
                                placeholder-gray-400
                                text-gray-300 bg-gray-700                
                            " 
                        />

            
                        <div className="relative"> 
                        
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
                                R$
                            </span>
                            
                            <input 
                                type="number" 
                                name="price"
                                value={newGame.price} 
                                onChange={handleChange} 
                                placeholder='Preço do jogo...' 
                                min="2" 
                                max="999"
                                className="
                                    pl-8 border border-gray-300 p-2 rounded 
                                    focus:outline-none focus:ring-0
                                    placeholder-gray-400
                                    text-gray-300 bg-gray-700                 /* ⬅️ Novo: Cor do fundo e texto digitado */
                                    [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] 
                                " 
                            />
                        </div>
                        
                        <button 
                            type='submit' 
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
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