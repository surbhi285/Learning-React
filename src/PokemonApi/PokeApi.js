import React, { useEffect, useState } from 'react';

function PokeAPi(){
    const[pokemonChoice, setPokemonChoice] = useState("");
    const[selectPokemon, setSelectPokemon] = useState();
    console.log("select Pokemon => ", selectPokemon);

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonChoice}` ;

    function convertJsonToRelevantData(data){
        if(!data && !data.id){
            return[];
        }
           const {id, name, weight, height, abilities} = data;

           const abilityString = abilities.map((ability)=>{
            return ability.ability.name;
           }) 
           .join(", ");

           return {
            id, 
            name, 
            weight, 
            height, 
            abilityString,
        };
    }
    
    useEffect (()=>{
         
        fetch(url).then(response=>response.json()).then((data)=>{
            // console.log("data debug", data)

            if(!pokemonChoice){
            }else{
            const convertedData = convertJsonToRelevantData(data);
            setSelectPokemon(convertedData);
            }
        });
    }, [pokemonChoice, url])
 
    function pokemonSelection (event){
        const value=event.target.value;
        setPokemonChoice(value);
    }

    return(
        <>
        <div>Select Pokemon</div>
        <select onChange={(event)=> pokemonSelection(event)}>
            <option value="">Select an option</option>
            <option value="ditto">Ditto</option>
            <option value="babulsaur">Babulsaur</option>
            <option value="pikachu">Pikachu</option>
        </select>

        <div style={{width: "500px", height: "90px", border: "1px solid black"}}>
            <div>Name: {selectPokemon? selectPokemon.name: ""}</div> 
            <div>Height: {selectPokemon?.height}</div>
            <div>Weight: {selectPokemon?.weight}</div>
            <div>Abilities: {selectPokemon?.abilityString}</div>
        </div>
        </>
    )
}

export default PokeAPi;