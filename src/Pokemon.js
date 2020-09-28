import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PokeBall } from './pokeball.svg'

function Pokemon(props) {

    const typeEmblems = {
        'normal': 'https://cdn.bulbagarden.net/upload/2/22/GO_Normal.png',
        'fire': 'https://cdn.bulbagarden.net/upload/0/0e/GO_Fire.png',
        'water': 'https://cdn.bulbagarden.net/upload/a/aa/GO_Water.png',
        'grass': 'https://cdn.bulbagarden.net/upload/6/61/GO_Grass.png',
        'electric': 'https://cdn.bulbagarden.net/upload/4/4a/GO_Electric.png',
        'ice': 'https://cdn.bulbagarden.net/upload/c/c6/GO_Ice.png',
        'fighting': 'https://cdn.bulbagarden.net/upload/1/1e/GO_Fighting.png',
        'poison': 'https://cdn.bulbagarden.net/upload/f/ff/GO_Poison.png',
        'ground': 'https://cdn.bulbagarden.net/upload/2/21/GO_Ground.png',
        'flying': 'https://cdn.bulbagarden.net/upload/8/87/GO_Flying.png',
        'psychic': 'https://cdn.bulbagarden.net/upload/f/f2/GO_Psychic.png',
        'bug': 'https://cdn.bulbagarden.net/upload/9/94/GO_Bug.png',
        'rock': 'https://cdn.bulbagarden.net/upload/1/11/GO_Rock.png',
        'ghost': 'https://cdn.bulbagarden.net/upload/a/a1/GO_Ghost.png',
        'dragon': 'https://cdn.bulbagarden.net/upload/9/90/GO_Dragon.png',
    }

    const [monster, setMonster] = useState({})
    const [types, setTypes] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    
      function getDetails () {
        setIsLoading(true)
        fetch(props.pokemon.url)
            .then(response => response.json())
            .then(data => setMonster(data))
      }
    
    useEffect(() => {
        getDetails()
    }, [])

    useEffect(() => {
        if (monster.types) {
            getTypes();
        }
    }, [monster])

    function getTypes () {
        let typesArray = [];
        monster.types.map(type => typesArray.push(type.type.name))
        setTypes(typesArray);
        setIsLoading(false);
    }

    var STYLES = { 
        backgroundColor: `var(--type-${types[0]})`,
    }

    function makeIDNumber (id) {
        if (id) {
            if (id < 10) {
                return `#00${id}`
            } else if (id < 100) {
                return `#0${id}`
            } else {
                return `#${id}`
            }
        } else {
            return '#000'
        }
        
    }
     

    return (
        <Link to={ `/pokemon/${monster.id}` } >
            <div key={ monster.id } style={STYLES} className="monster-home-display" >
                
                { isLoading ? <PokeBall /> : <img src={`https://pokeres.bastionbot.org/images/pokemon/${monster.id}.png`} alt=""/> }
                

                <div className="monster-name" >
                    <h1> { props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) } </h1>
                </div>


                <div className="monster-id" >
                    { makeIDNumber(monster.id) }
                </div>

                <div className="monster-type" >
                    { types.map(type =>
                        <img title={ type.charAt(0).toUpperCase() + type.slice(1) } src={ typeEmblems[type] } alt=""/>
                    )}          
                </div>

            </div>
        </Link>
    )
}

export default Pokemon
