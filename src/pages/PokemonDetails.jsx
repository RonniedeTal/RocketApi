import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PokemonsPerType from './PokemonsPerType'
function PokemonDetails() {
    const {id}=useParams()
    const[pokemonValue, setPokemonValue]=useState(null)


    useEffect(()=>{

       

        axios.get(`${import.meta.env.VITE_API_URL}/pokemon/${id}`)
        .then((response)=>{
            console.log(response);
            setPokemonValue(response.data)

        }).catch((error)=>{
          

        })




    },[id])
    if(pokemonValue===null){
        return <p>arnaldo</p>
    }

   
   
  return (
    <div>
      <h1>{pokemonValue.name ==="charmander" ? "Charmander Manuel" : pokemonValue.name.charAt(0).toUpperCase()+pokemonValue.name.slice(1)}</h1>
        <h2>{pokemonValue.name ==="butterfree" ? "Apodo: Mantequilla gratis" : null} </h2>
      <h1>Pokemon con ID: {pokemonValue.id}</h1>
      <img src={pokemonValue.sprites.front_default}/>
      <img src={pokemonValue.sprites.back_default}/>
      <h2>Version Shiny</h2>
      <img src={pokemonValue.sprites.front_shiny}/>
      <img src={pokemonValue.sprites.back_shiny}/>
      
      
      
      <h3>Habilidades </h3>
      <h1>{pokemonValue.name ==="vaporeon" ? `¿Sabías que..?` : null} </h1>
      <p>{pokemonValue.name ==="vaporeon" ? `"Hey chicos, sabían que... en terminos de reproducción entre hombres humanos y Pokémon hembras, Vaporeon es el Pokémon mas compatible para los Humanos?

No solo porque están en el Grupo Huevo Campo, que está principalmente conformado por Mamíferos, Vaporeon tiene en promedio una medida de 91.44 Cm. de altura y un peso de 28,98 Kg., esto significa que son suficientemente grandes para soportar penes humanos, y con sus impresionantes Estadisticas Base de PS y acceso a Armadura Ácida, puedes ser duro con ella. Debido a su biología mayoritariamente compuesta de agua, no hay dudas de que una Vaporeon excitada sería increiblemente húmeda, tan húmeda que podrías facilmente tener sexo con una por horas sin lastimarte o sentir dolor.

Ellas también pueden aprender los movimientos "Atracción", "Ojitos Tiernos", "Seducción", "Encanto" y "Latigo", además de no tener pelaje para esconder pezones, así que sería increiblemente facil conseguirte una con humor. Con sus habilidades "Absorbe Agua" e "Hidratación", pueden recuperarse facilmente de la fatiga con suficiente agua.

Ningún otro Pokémon llega a estar cerca de este nivel de compatibilidad. Además, como curiosidad, si te empeñas suficiente al acabar, puedes llegar a hacer a tu Vaporeon Blanca.

Vaporeon está literalmente hecha para el pene humano. Asombrosas Estadisticas de Defensa+Alta cantidad de PS+Armadura Ácida significa que puede recibir verga todo el dia, de todas las formas y tamaños, y aún así venir por mas."` : null} </p>

    
    </div>
  )
}

export default PokemonDetails
