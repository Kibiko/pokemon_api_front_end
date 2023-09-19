const RosterPokemon = ({pokemon, number, deleteFromRoster, currentRoster, rosterNumber}) => {

    const numberShift = number + 1;

    const imgUrl = "sprites/sprites/sprites/pokemon/" + JSON.stringify(numberShift) + ".png"

    const handleDelete = () => {
        deleteFromRoster(pokemon);
    }

    const displayDelete = () => {
        if(currentRoster === rosterNumber){
            return <button id="delete" onClick={handleDelete}></button>;
        }
    }

    return(
        <>
            <div id="roster_pokemon">
                <img src={imgUrl} alt="pokemonImage" />
            </div>
            {displayDelete()}
        </>
    )
}

export default RosterPokemon;