import PokemonContainer from './containers/PokemonContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="logo" src={"pokemon_logo.png"} alt="pokemon_logo"/>
      <PokemonContainer />
    </div>
  );
}

export default App;
