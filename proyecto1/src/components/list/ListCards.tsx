import LongSword from '../longsword/LongSword'
import LoadedAxe from '../loadedaxe/LoadedAxe';
import DualSwords from '../dualswords/DualSwords';

const ListCards: React.FC =() => {
    return (
        <div>
            <div>
              <LongSword espada={{name: "Espada Larga", imagen: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/monster-hunter-rise-hand-me-down-sword-pose.jpg", daño: 65, defensa: 50, agilidad: 65}} />
            </div>
            <div>
              <LoadedAxe axe={{name: "Hacha Cargada", image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/02/monster-hunter-rise-charge-blade-feature-header.jpg", damage: 85, defense: 95, agility: 25}} />
            </div>
            <div>
              <DualSwords dual={{name: "Espadas Dobles", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/monster-hunter-world-dual-blades-information.jpg", damage: 45, defense: 45, agility: 90}} />
            </div>
        </div>
    )
}
export default ListCards;