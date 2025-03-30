import ChangeName from "../changename/ChangeName";

//primero creo la interfaz
interface LoadedAxe {
    name: string;
    image: string;
    damage: number;
    defense: number;
    agility: number;
}
//despues la interfaz que va a recibir la interfaz anterior y los props
interface LoadedAxeProps {
    axe: LoadedAxe;
}

//despues creo el componente que va a recibir la interfaz y los props
const LoadedAxe = ({axe}: LoadedAxeProps) => {
    return (
        <div className='container'>
            <h3>{axe.name}</h3>
            <img
                src={axe.image} alt={axe.name}
                className="LoadedAxe-image"
                style={{ maxWidth: `350px`, height: `auto`}}
            />
            <p>Daño: {axe.damage}</p>
            <p>Defensa: {axe.defense}</p>
            <p>Agilidad: {axe.agility}</p>
            <p>
                <ChangeName />
            </p>
        </div>

    )
}
//por ultimo exporto el componente
export default LoadedAxe;