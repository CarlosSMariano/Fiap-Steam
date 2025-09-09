import React, { useState } from "react";

function Produtos(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? "font-bold text-blue-600" : ""}
        >
            {props.children}
        </h3>
    );
}

export default Produtos;