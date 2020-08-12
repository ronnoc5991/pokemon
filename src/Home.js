import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function Home() {
    
   const [fetchedPokemon, setFetchedPokemon] = useState([])

  const numberOfPokemon = 12;
    
  function getPokemon () {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
      .then(response => response.json())
      .then(allPokemon => setFetchedPokemon(allPokemon.results))
  }

//   function getPokemon () {
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
//     .then(response => response.json())
//     .then(allPokemon => allPokemon.results.map(pokemon => {
//         fetch(pokemon.url)
//         .then(response => response.json())
//         .then(pokemonData => {
//           setFetchedPokemon(fetchedPokemon.push(pokemonData))
//           })}))
//   //   .then(data => console.log(data))
// }

  useEffect(() => {
    getPokemon()
  }, [])

  function logThatShit () {
    console.log(fetchedPokemon);
  }

    return (
      <>
        <div className="home main">
          Hello from Home
          <button onClick={ logThatShit }>Log</button>
        </div>
      </>
    )
}

export default Home
