import React, { useState } from "react";

const ChangeName: React.FC = () => {
    const[name, setName] = useState("");
    const send = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`el nuevo nombre es: ${name}`)
    }

    return(
        <div>
            <form onSubmit={send}>
                <p>
                <input className="input-name" type="text" placeholder="Nuevo nombre" onChange={(event) =>(setName(event.target.value))}/>
                </p>
                <p>
                <button className="button-name" type="submit">Cambiar nombre</button>
                </p>
            </form>
        </div>
    )
}

export default ChangeName;