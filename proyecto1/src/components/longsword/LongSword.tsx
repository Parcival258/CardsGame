import './LongSword.css'

interface LongSword {
    name: string;
    imagen: string;
    daño: number;
    defensa: number;
    agilidad: number;
};

interface LongSwordProps {
    espada: LongSword;
}

const LongSword = ({espada}: LongSwordProps) => {
    return (
        <div  className='LongSword-container'>
            <h3>{espada.name}</h3>
            <img 
                src={espada.imagen} 
                alt={espada.name} 
                className="LongSword-image" 
                
            />
            <p>Daño: {espada.daño}</p>
            <p>Defensa: {espada.defensa}</p>
            <p>Agilidad: {espada.agilidad}</p>
        </div>
    );
}

export default LongSword;