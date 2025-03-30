import ChangeName from "../changename/ChangeName";
//primero creo la interfaz
interface DualSwords {
    name: string;
    image: string;
    damage: number;
    defense: number;
    agility: number;
}
//despues la interfaz que va a recibir la interfaz anterior y los props
interface DualSwordsProps {
    dual: DualSwords;
}

//despues creo el componente que va a recibir la interfaz y los props
const DualSwords = ({dual}: DualSwordsProps) => {
    return (
        <div className='container'>
            <h3>{dual.name}</h3>
            <img
                src={dual.image} alt={dual.name}
                className="DualSwords-image"
                style={{ maxWidth: `350px`, height: `auto` }}
            />
            <p>Daño: {dual.damage}</p>
            <p>Defensa: {dual.defense}</p>
            <p>Agilidad: {dual.agility}</p>
            <p>
                <ChangeName />
            </p>
        </div>
    )
}
//por ultimo exporto el componente
export default DualSwords;