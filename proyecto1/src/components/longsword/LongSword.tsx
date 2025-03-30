import ChangeName from "../changename/ChangeName";

interface LongSword {
    name: string;
    imagen: string;
    damage: number;
    defense: number;
    agility: number;
};

interface LongSwordProps {
    sword: LongSword;
}

const LongSword = ({sword: sword}: LongSwordProps) => {
    return (
        <div  className='container'>
            <h3>{sword.name}</h3>
            <img 
                src={sword.imagen} 
                alt={sword.name} 
                className="LongSword-image" 
                
            />
            <p>Daño: {sword.damage}</p>
            <p>Defensa: {sword.defense}</p>
            <p>Agilidad: {sword.agility}</p>
            <p>
                <ChangeName />
            </p>
        </div>
        
    );
}

export default LongSword;