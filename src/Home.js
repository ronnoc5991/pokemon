import React, { useEffect, useState, useRef } from 'react'
import Pokemon from './Pokemon'
import Closed from './pokeball-closed.png'
import Open from './pokeball-open.png'
import Outline from './pokeoutline.png'
import gsap from 'gsap';

function Home() {
  const [numberOfPokemon, setNumberOfPokemon] = useState(100)
  const [rawPokemon, setRawPokemon] = useState([])
  const [hovering, setHovering] = useState(false)

  var monster = useRef(null);

  function getPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
    .then(response => response.json())
    .then(allPokemon => setRawPokemon(allPokemon.results))
}

  function loadMorePokemon () {
    setNumberOfPokemon(numberOfPokemon => numberOfPokemon + 30 )
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
          <div className="background-ball"> <img src={ Outline } alt=""/> </div>
          <div className="home-title">Pokemon</div>
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
