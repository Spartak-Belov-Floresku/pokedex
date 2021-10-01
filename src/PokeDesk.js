import Pokemons from "./Pokemons"
import './PokeDesk.css';

const PokeDesk = ({pokemons}) => {
    return (
        <div id="PokeDesk">
            <h2>Pokedex</h2>
            <div>
                {pokemons.map( elm => (
                    <div key={elm.id} className="Pokemons" data-id={elm.id}>
                        <Pokemons pokemon={elm}/>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default PokeDesk