import './App.css';
import pokedex_arr from './pokedex';
import PokeDesk from './PokeDesk';

function App() {
  return (
    <PokeDesk pokemons={pokedex_arr} />
  );
}

export default App;
