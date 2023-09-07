import RosterPokemon from "./RosterPokemon"

const Roster = ({id, roster, pokemonList, deleteFromRoster, setCurrentRoster, currentRoster}) => {

    const handleCurrentRoster = () => {
        if(currentRoster !== id){
            setCurrentRoster(id);
        } else{
            setCurrentRoster(null);
        }
    }

    const mappedPokemonRoster = roster.map((pokemon, index) => {
        return <RosterPokemon
                pokemon={pokemon}
                key={index}
                currentRoster={currentRoster}
                rosterNumber={id}
                number={pokemonList.indexOf(pokemon)}
                deleteFromRoster={deleteFromRoster}
                />
    })

    const displayPokeBall = () => {
        if(currentRoster === id){
            return <img src="/sprites/sprites/items/rare-candy.png" alt=""/>;
        }
    }

    return(
        <div id="roster_list">
            <div id="edits">
                <button id="select" onClick={handleCurrentRoster}>Edit</button>
                {displayPokeBall()}
            </div>
            {mappedPokemonRoster}
        </div>
    )
}

export default Roster;