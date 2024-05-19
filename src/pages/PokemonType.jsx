import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function PokemonType() {

const[pokemonType,setPokemonType]=useState(null)


useEffect(()=>{

getDataTypes()

},[])


const getDataTypes=()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/type`)
    .then((response)=>{
    console.log(response.data.results);
    setPokemonType(response.data.results)

}).catch((error)=>{

})
}
if (pokemonType === null){
    return <div className="wrapper">
    <div className="pokeball">
    </div>
  </div>
}

  return (
    <div><h1><b>POKEMON TYPES</b></h1>
    <div >
    {pokemonType.map((eachPokemonType, i)=>{
        return(
            <Link key={i} to={`/pokemon-types/${eachPokemonType.name}`}>
            <div ><button className='spin1'><img src=
            {`images/${eachPokemonType.name}-logo.png`}width={50}/></button>
            </div></Link>
        )

    })}


    </div>
    
    
     </div>
      
    
  )
}

export default PokemonType
