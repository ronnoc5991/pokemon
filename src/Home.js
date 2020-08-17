import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function Home() {
  const [numberOfPokemon, setNumberOfPokemon] = useState(15)
  const [rawPokemon, setRawPokemon] = useState([])

  function getPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
    .then(response => response.json())
    .then(allPokemon => setRawPokemon(allPokemon.results))
}

  function loadMorePokemon () {
    setNumberOfPokemon(numberOfPokemon => numberOfPokemon + 10 )
  }

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {
    getPokemon()
  }, [numberOfPokemon])

    return (
      <>
        <div className="home main">
        { rawPokemon.map(pokemon => (
          <Pokemon  key={ pokemon.name } pokemon={ pokemon } />
        )) }
        <div className="load-more" onClick={ loadMorePokemon } >
          <div>Load More</div>
        </div>
        </div>
      </>
    )
}

export default Home
