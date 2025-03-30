import React from "react";


interface BottonProps{
    name:string;
}

const Button: React.FC<BottonProps> = ({name}) => {
    const hacerClick = () => {
        alert(`Arma actualizada
            el nuevo nombre es: ${name}`)
    }

    return (
        <div>
            <button className="Boton" onClick={hacerClick}>
                actualizar
            </button>
        </div>
    )
}

export default Button;