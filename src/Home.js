import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import Pikachu from './pikachu.png'
import Closed from './pokeball-closed.png'
import Open from './pokeball-open.png'

function Home() {
  const [numberOfPokemon, setNumberOfPokemon] = useState(15)
  const [rawPokemon, setRawPokemon] = useState([])
  const [hovering, setHovering] = useState(false)

  function getPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
    .then(response => response.json())
    .then(allPokemon => setRawPokemon(allPokemon.results))
}

  function loadMorePokemon () {
    setNumberOfPokemon(numberOfPokemon => numberOfPokemon + 20 )
  }

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {
    getPokemon()
  }, [numberOfPokemon])

  function changeImage () {
    setHovering(!hovering)
  }

    return (
      <>
        <div className="home main">
        { rawPokemon.map(pokemon => (
          <Pokemon  key={ pokemon.name } pokemon={ pokemon } />
        )) }
        <div className="load-more" onClick={ loadMorePokemon } >
          <div onMouseEnter={ changeImage } onMouseLeave={ changeImage }> 
            { hovering ? <img src={ Open } alt=""/> : <img src={ Closed } alt=""/> }
            </div>
        </div>
        </div>
      </>
    )
}

export default Home
