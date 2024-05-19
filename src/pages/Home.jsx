import React from 'react'
import pokeball from "../assets/images/pokeball-logo.png"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <Link to="/pokemon-types"> <button>Pokemon Types</button></Link> 
    <button>Pokedex</button>
    <button>Generations</button>
    <br/>

     <Link to="/all-pokemon">
     <button className='spin'> <img src= {pokeball}alt="pokeball" /> </button>
     </Link>
    </div>
  )
}

export default Home
