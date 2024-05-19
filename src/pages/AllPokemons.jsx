import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useParams } from 'react-router-dom'

function AllPokemons() {
    const params=useParams()
    const [pokemon, setPokemon]=useState(null)

    useEffect(()=>{

    pokemonList()

    },[])

    const pokemonList=()=>{
        axios .get(`${import.meta.env.VITE_API_URL}/pokemon?limit=151`)
        .then((response)=>{
            console.log(response.data);
            setPokemon(response.data.results)


        }).catch((error)=>{
               
        })

        
    }

    if (pokemon === null){
        return <div className="wrapper">
        <div className="pokeball">
        </div>
      </div>
    }

  return (
    <div><h1>pokemon list</h1>
    <div>
    {pokemon.map((eachPokemon, i)=>{
        
        return( 
            <div key={i}>
              <Link to={`/all-pokemon/${i +1}`} >  
              <p>{eachPokemon.name.charAt(0).toUpperCase()+eachPokemon.name.slice(1)}</p>
                </Link>
                
            </div> 
        )
    })}

  </div>
 </div> )
}

export default AllPokemons
