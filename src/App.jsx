import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import './App.css'
import {Routes, Route} from "react-router-dom"
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//pages
import Home from './pages/Home'
import AllPokemons from './pages/AllPokemons'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'
import PokemonDetails from './pages/PokemonDetails'
import PokemonType from './pages/PokemonType'
import PokemonsPerType from './pages/PokemonsPerType'






function App() {


  return (
    <>
    <Navbar />

      <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/all-pokemon' element={<AllPokemons/>}/>
    <Route path='/error' element={<ErrorPage />}/>
    <Route path='*' element={<NotFound />}/>
    <Route path='/all-pokemon/:id' element={<PokemonDetails />}/>
    
    <Route path='/pokemon-types' element={<PokemonType/>}/>
    <Route path='/pokemon-types/:pokemonTypeId' element={<PokemonsPerType />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
