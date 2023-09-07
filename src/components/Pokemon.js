const Pokemon = ({pokemon, number, addToRoster, typeList}) => {

    const capitalisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const numberShift = number + 1;

    const imgUrl = "/sprites/sprites/pokemon/" + JSON.stringify(numberShift) + ".png"

    const handleAddToRoster = () => {
        addToRoster(pokemon);
    }

    const displayTypes = typeList[number] ? typeList[number].map((type) => {
        return <li>{type}</li>
    }) : <li>loading...</li>
    

    return(
        <div id="pokemon">
            <h3>{numberShift}. {capitalisedName}</h3>
            <div id="types">
                <ul>{displayTypes}</ul>
                <img src={imgUrl} alt="pokemonImage" />
            </div>
            <button onClick={handleAddToRoster}>Add to Roster</button>
        </div>
    )
}

export default Pokemon;