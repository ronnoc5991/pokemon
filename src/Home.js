import React, { useEffect, useState } from 'react'

function Home() {

    const [fetchedPokemon, setFetchedPokemon] = useState([])

    const numberOfPokemon = 12;
    
      function getPokemon () {
          fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
          .then(response => response.json())
          .then(allPokemon => allPokemon.results.map(pokemon => {
              fetch(pokemon.url)
              .then(response => response.json())
              .then(pokemonData => {
                setFetchedPokemon(fetchedPokemon.push(pokemonData))
                console.log(pokemonData)
                })
                .then(data => console.log(fetchedPokemon))
          }))
        //   .then(data => console.log(data))
      }
    
      useEffect(() => {
        getPokemon()
      }, [])

    return (
        <div className="home main">
            Hello from Home
        </div>
    )
}

export default Home
