import React, { useState, useEffect  } from "react";

function Adicionar(props) {

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);

        props.onClick(); 
        
    };
    
    useEffect(() => {
        if (props.reset) {
            setIsLoading(false);
        }
    }, [props.reset]);

    return (
        <button
            onClick={handleClick}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
            disabled={isLoading} 
        >
           
            {isLoading ? "Selecionado" : props.children}
        </button>
    );
}

export default Adicionar;