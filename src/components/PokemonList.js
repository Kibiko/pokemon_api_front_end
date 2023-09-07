import Pokemon from "./Pokemon";

const PokemonList = ({pokemonList, pageNumber, maxItemsPerPage, addToRoster, typeList}) => {

    const mappedPokemon = pokemonList.filter((pokemon, index) => { 
        if(index >= (pageNumber-1)*maxItemsPerPage && index < pageNumber*maxItemsPerPage){
            return pokemon;
        }
    })
    .map((pokemon, index) =>{
        return <Pokemon 
                pokemon={pokemon}
                key={index}
                number={pokemonList.indexOf(pokemon)}
                addToRoster={addToRoster}
                typeList={typeList}
                />
    });

    return(
        <div  id="pokemon_list">
            {mappedPokemon}
        </div>
    )
}

export default PokemonList;