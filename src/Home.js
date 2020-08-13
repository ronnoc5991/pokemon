import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function Home() {
  const numberOfPokemon = 15;
  const [rawPokemon, setRawPokemon] = useState([])

  function getPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
    .then(response => response.json())
    .then(allPokemon => setRawPokemon(allPokemon.results))
}

  useEffect(() => {
    getPokemon()
  }, [])

    return (
      <>
        <div className="home main">
        { rawPokemon.map(pokemon => (
          <Pokemon  key={ pokemon.name } pokemon={ pokemon } />
        )) }
        </div>
      </>
    )
}

export default Home
