import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';

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
    const [isLoading, setIsLoading] = useState(true)

    
    var pokeDiv = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(pokeDiv, {opacity: 0}, {opacity: 1, duration: .5})
    }, [isLoading])

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
            return ''
        }
        
    }

    var image = useRef(null);
    var pokeName = useRef(null);
    var pokeID = useRef(null);
    var pokeTypes = useRef(null);

    function fadeIn () {
        const line = gsap.timeline();
        line.fromTo(image, {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 1, delay: .5});
        line.fromTo(pokeName, {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: .3});
        line.fromTo(pokeID, {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: .3});
        line.fromTo(pokeTypes, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: .3});
    }

    return (
        <Link to={ `/pokemon/${monster.id}` } ref={ el => { pokeDiv = el } } >
            <div key={ monster.id } style={STYLES} className='monster-home-display' >
                
                { isLoading ? '' : <img onLoad={ fadeIn } ref={ el => { image = el } } src={`https://pokeres.bastionbot.org/images/pokemon/${monster.id}.png`} alt="" /> }

                <div className="ball-container"></div>

                <div className="monster-name" ref={ el => { pokeName = el } }>
                    <h1> { props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) } </h1>
                </div>


                <div className="monster-id" ref={ el => { pokeID = el } }>
                    { makeIDNumber(monster.id) }
                </div>

                <div className="monster-type">
                    { types.map(type =>
                        <img ref={ el => { pokeTypes = el } } title={ type.charAt(0).toUpperCase() + type.slice(1) } key={ type }  src={ typeEmblems[type] } alt=""/>
                    )}          
                </div>

            </div>
        </Link>
    )
}

export default Pokemon
