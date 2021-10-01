import ReactDOM from 'react-dom'
import './Pokemons.css';
import pokedex_arr from './pokedex';


const ChangePokemons = id => {

    const pokemons = document.querySelectorAll('.Pokemons');
    if(pokemons.length > 1){

        pokemons.forEach(elm => { 
            if(elm.getAttribute('data-id') != id){
                elm.remove();
            } 
        });

    }else{

        const PokeDesk = document.querySelector('#PokeDesk');
        
        pokedex_arr.forEach(obj => {
            if(obj.id != id){
                let div = document.createElement('div');
                div.setAttribute('class','Pokemons');
                div.setAttribute('data-id', obj.id);
                ReactDOM.render(<Pokemons pokemon={obj} />, div);
                PokeDesk.append(div);
            }
        });
    }
}


const Pokemons = ({pokemon}) => {

    const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    return (
        <>
            <h4 id={pokemon.id} onClick={() => ChangePokemons(pokemon.id)}>{pokemon.name}</h4>
            <img src={`${img}${pokemon.id}.png`} alt={pokemon.name}/>
            <ul>
                <li>Type: {pokemon.type}</li>
                <li>EXP: {pokemon.base_experience}</li>
            </ul>
        </> 
    );
}

export default Pokemons