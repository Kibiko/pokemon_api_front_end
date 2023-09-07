import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import Roster from "../components/Roster";

const PokemonContainer = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [roster1, setRoster1] = useState([]);
    const [roster2, setRoster2] = useState([]);
    const [roster3, setRoster3] = useState([]);
    const [roster4, setRoster4] = useState([]);
    const [roster5, setRoster5] = useState([]);
    const [currentRoster, setCurrentRoster] = useState(1);

    const fetchPokemonNames = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const jsonData = await response.json();
        const allPromises = [];
        await allPromises.push(jsonData);
        const allPokemon = await allPromises.map((pokemon) => pokemon.results).flat();
        setPokemonList(allPokemon);
    };

    const fetchPokemonTypes = async () => {
        const allTypes = await [];
        for (let i = 0 ; i< pokemonList.length;i++){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[i].name}`);
            const jsonData = await response.json();
            const types = [];
            for(let j = 0 ; j<jsonData.types.length; j++){
                types.push(jsonData.types[j].type.name);
            }
            await allTypes.push(types);
        }
        const allPokemonTypes = await allTypes.map((pokemon) => pokemon);
        await setPokemonTypes(allPokemonTypes);
    }

    useEffect(() => {
        fetchPokemonNames();
    },[]);

    useEffect(() => {
        fetchPokemonTypes();
    },[fetchPokemonTypes]);

    const maxItemsPerPage = 16;

    const maxPageNumber = Math.ceil(pokemonList.length/maxItemsPerPage)

    const backPage = () => {
        if(pageNumber > 1){
            setPageNumber(pageNumber - 1);
        }
    };

    const nextPage = () => {
        if(pageNumber < pokemonList.length/maxItemsPerPage){
            setPageNumber(pageNumber + 1);
        }
    };

    const addToRoster = (pokemon) => {
        switch(currentRoster){
            case "1":
                if(roster1.length < 6 && !roster1.includes(pokemon)){
                    const updatedRoster = [...roster1, pokemon];
                    setRoster1(updatedRoster);
                }
                break;
            case "2":
                if(roster2.length < 6 && !roster2.includes(pokemon)){
                    const updatedRoster = [...roster2, pokemon];
                    setRoster2(updatedRoster);
                }
                break;
            case "3":
                if(roster3.length < 6 && !roster3.includes(pokemon)){
                    const updatedRoster = [...roster3, pokemon];
                    setRoster3(updatedRoster);
                }
                break;
            case "4":
                if(roster4.length < 6 && !roster4.includes(pokemon)){
                    const updatedRoster = [...roster4, pokemon];
                    setRoster4(updatedRoster);
                }
                break;
            case "5":
                if(roster5.length < 6 && !roster5.includes(pokemon)){
                    const updatedRoster = [...roster5, pokemon];
                    setRoster5(updatedRoster);
                }
                break;
    }}

    const deleteFromRoster = (deletePokemon) => {
        let updatedRoster = null;
        switch(currentRoster){
            case "1": 
                updatedRoster = roster1.filter((pokemon) => pokemon.name !== deletePokemon.name);
                setRoster1(updatedRoster);
                break;
            case "2": 
                updatedRoster = roster2.filter((pokemon) => pokemon.name !== deletePokemon.name);
                setRoster2(updatedRoster);
                break;
            case "3": 
                updatedRoster = roster3.filter((pokemon) => pokemon.name !== deletePokemon.name);
                setRoster3(updatedRoster);
                break;
            case "4": 
                updatedRoster = roster4.filter((pokemon) => pokemon.name !== deletePokemon.name);
                setRoster4(updatedRoster);
                break;
            case "5": 
                updatedRoster = roster5.filter((pokemon) => pokemon.name !== deletePokemon.name);
                setRoster5(updatedRoster);
                break;
        }  
    }

    return(
        <div id="layout">
            <div id="all_pokemon">
                <div id="list_header">
                    <h2>All Pokemon</h2>
                    <div id="buttons">
                        <p>Page: {pageNumber}/{maxPageNumber}</p>
                        <button onClick={backPage}>Back</button>
                        <button onClick={nextPage}>Next</button>
                    </div>
                </div>
                <PokemonList typeList={pokemonTypes} pokemonList={pokemonList} pageNumber={pageNumber} maxItemsPerPage={maxItemsPerPage} addToRoster={addToRoster}/>
            </div>
            <div id="roster">
                <h2>Roster</h2>
                <Roster id="1" pokemonList={pokemonList} currentRoster={currentRoster} roster={roster1} deleteFromRoster={deleteFromRoster} setCurrentRoster={setCurrentRoster}/>
                <Roster id="2" pokemonList={pokemonList} currentRoster={currentRoster} roster={roster2} deleteFromRoster={deleteFromRoster} setCurrentRoster={setCurrentRoster}/>
                <Roster id="3" pokemonList={pokemonList} currentRoster={currentRoster} roster={roster3} deleteFromRoster={deleteFromRoster} setCurrentRoster={setCurrentRoster}/>
                <Roster id="4" pokemonList={pokemonList} currentRoster={currentRoster} roster={roster4} deleteFromRoster={deleteFromRoster} setCurrentRoster={setCurrentRoster}/>
                <Roster id="5" pokemonList={pokemonList} currentRoster={currentRoster} roster={roster5} deleteFromRoster={deleteFromRoster} setCurrentRoster={setCurrentRoster}/>
            </div>
        </div>
    )
}

export default PokemonContainer;