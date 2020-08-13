import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PokeBall } from './pokeball.svg'

function Pokemon(props) {

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
        // backgroundColor: `var(--type-${types[0]})`,
        boxShadow: `0px 0px 10px 5px var(--type-${types[0]})`
        // border: `2px solid var(--type-${types[0]})`
    }
     

    return (
        <Link to={ `/${monster.id}` } >
            <div key={ monster.id } style={STYLES} className="monster-home-display" >
                { isLoading ? <PokeBall /> : <img src={`https://pokeres.bastionbot.org/images/pokemon/${monster.id}.png`} alt=""/> }
                {/* <img src={`https://pokeres.bastionbot.org/images/pokemon/${monster.id}.png`} alt=""/> */}
                <h1> { props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) } </h1>
                {/* <h3> Height: { monster.height } </h3>
                <h3> Weight: { monster.weight } </h3> */}
                {/* { types.map(type => (
                    <h3>Type: { type } </h3>
                )) } */}
            </div>
        </Link>
    )
}

export default Pokemon
