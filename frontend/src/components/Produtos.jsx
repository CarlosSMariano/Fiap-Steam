import React, { useState } from "react";

function Produtos(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? "font-semibold text-[23px] text-[#ed145b]" : " text-[20px] text-[#616d72]"}
        >
            {props.children}
        </h3>
    );
}

export default Produtos;