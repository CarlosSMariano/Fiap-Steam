import React from 'react'
import Adicionar from './Adicionar'
import Produtos from './Produtos';
import { useState, useEffect } from 'react';



function Catalogo(){
    
    const [carrinho, setCarrinho] = useState([]);
    const [resetButtons, setResetButtons] = useState(false); 

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
                    <h3>Lista de Jogos:</h3>
                        <div className='py-5 px-4 '>
                            <div className='flex space-x-2'>
                                <Produtos>Hollow Knight</Produtos>
                                <Adicionar reset={resetButtons} onClick={() => onSetGame("Hollow Knight",60)}>+</Adicionar>
                            </div>
                            <div className='flex space-x-2'>
                                <Produtos>Hollow Knight: Silksong</Produtos> 
                                <Adicionar  reset={resetButtons} onClick={() => onSetGame("Hollow Knight: Silksong",30)}>+</Adicionar>
                            </div>
                            <div className='flex space-x-2'>
                                <Produtos>Ghost of Yotei</Produtos>
                                <Adicionar  reset={resetButtons} onClick={() => {onSetGame("Ghost of Yotei", 400)}}>+</Adicionar>
                            </div >
                            <div className='flex space-x-2'>
                                    <Produtos>Ghost of Tsushima</Produtos>
                                    <Adicionar  reset={resetButtons} onClick={() => onSetGame("Ghost of Tsushima", 300)}>+</Adicionar>
                            </div>
                        </div>  
                </div>
                <div>
                    <h3>Carrinho:</h3>
                    <div>
                    {carrinho.map((item, index) => (
                            <Produtos key={index}>{item.titulo} - R${item.preco},00</Produtos>
                        ))}
                    </div>
                    <div>
                        <h3>
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