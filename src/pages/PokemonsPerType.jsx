import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function PokemonsPerType() {
    
    const params= useParams()
    console.log(params); 
    const [typeValue, setTypeValue]=useState([])
    const[pokemonValue, setPokemonValue]=useState(null)

    useEffect (()=> {
       
        getData()
    },[])
const getData=()=>{


       axios.get(`${import.meta.env.VITE_API_URL}/type/${params.pokemonTypeId}`)
        .then((response)=>{
                console.log(response.data)
                setTypeValue(response.data.pokemon)

        }) .catch((error)=>{

        })} 

        
  return (
<div >
    {typeValue.map((eachPokemon,i)=>{
        return(
            <div key={i}>
            <p>{eachPokemon.pokemon.name}</p> 
           
           </div>
        )
        
    })
}
      <h1><b>pokemon por tipo</b></h1>
    </div>
  )
}

export default PokemonsPerType
