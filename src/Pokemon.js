import React, { useState, useEffect } from 'react'

function Pokemon(props) {

const [monster, setMonster] = useState({})
const [types, setTypes] = useState([])

    
      function getDetails () {
        fetch(props.pokemon.url)
            .then(response => response.json())
            .then(data => setMonster(data))
      }
    
    useEffect(() => {
        getDetails()
    }, [])

    useEffect(() => {
        if (monster.types) {
            console.log(monster)
            getTypes();
        }
    }, [monster])

    function getTypes () {
        let typesArray = [];
        monster.types.map(type => typesArray.push(type.type.name))
        setTypes(typesArray);
    }

    return (
        <div key={ monster.id } className="monster-home-display" >
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${monster.id}.png`} alt=""/>
            <h1> { props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) } </h1>
            {/* <h3> Height: { monster.height } </h3>
            <h3> Weight: { monster.weight } </h3> */}
            {/* { types.map(type => (
                <h3>Type: { type } </h3>
            )) } */}
        </div>
    )
}

export default Pokemon
