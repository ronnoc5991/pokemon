import React, { useEffect, useState } from 'react'

function PokemonDetail({ match }) {

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

    const [details, setDetails] = useState({
        'abilities': [{'ability': {'name': '', 'url': ''}}],
        'types': [{'type': {'name': ''}}, {'type': {'name': ''}}],
        'stats': [{'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}],
        'name' : '',
    })

    const [abilities, setAbilities] = useState(
        [
            {
                'name': '',
                'effect_entries': [
                    {'effect': ''},
                    {'effect': ''}
                ]
            },
            {
                'name': '',
                'effect_entries': [
                    {'effect': ''},
                    {'effect': ''}
                ]
            }
        ]
        );

    function getDetails () {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then(response => response.json())
        .then(data => setDetails(data))
    }

    useEffect(() => {
        getDetails();
        getEvolutionChain();
    }, [])

    useEffect(() => {
        console.log(details)
        getAbilities()
    }, [details])

    function getEvolutionChain () {
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${match.params.id}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    // Evolution chains only work if passed the id number of the first evolution phase

    function getStyles (number) {
        return {
            width: `${number}%`
        }
    }

    function getAbilities () {
        let fetchedAbilities = []
        details.abilities.map(ability =>
                fetch(ability.ability.url)
                .then(response => response.json())
                .then(data => setAbilities(data))
            )
        setAbilities(fetchedAbilities)
    }

    // useEffect(() => {
    //     console.log(abilities)
    // }, [abilities])

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

    function getHeight (height) {
        return height * 10
    }

    function getWeight (weight) {
        return weight * .1
    }

    return (
        <div className="detail main">

            <div className="detail-information" >
                <div className="pokemon-name" >
                    { details.name.charAt(0).toUpperCase() + details.name.slice(1) }
                </div>
                <div className="pokemon-number" >
                    { makeIDNumber(details.id) }
                </div>

                <div className="detail-image-container" >
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${match.params.id}.png`} alt=""/>
                </div>

                <div className="info-piece" >
                    <div className="info-header" >
                        Height
                    </div>
                    <div className="info-info" > { getHeight(details.height) } cm </div>
                </div>

                <div className="info-piece" >
                    <div className="info-header">
                        Weight
                    </div>
                    <div className="info-info"> { getWeight(details.weight) } kg </div>
                </div>

                <div className="info-piece abilities" >
                    <div className="info-header">
                        Abilities
                    </div>
                    <div className="info-info" >
                        { details.abilities.map((ability, index) => 
                            <div> {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) } </div>
                        )}
                    </div>
    
                </div>

                <div className="info-piece types" >
                    <div className="info-header">
                        Types
                    </div>
                { details.types.map(type =>
                    <img title={ type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1) } src={ typeEmblems[type.type.name] } alt=""/>
                )}
                </div>
            </div>

            <div className="base-stats" >

                <div className="header" >
                    <h4>Base Stats</h4>
                </div>

                <div className="hp-container stat" >
                    <div className="label" >
                        { details.stats[0].stat.name.toUpperCase() }
                    </div>
                    <div className="stats-bar" >
                        <div className="hp-bar filled" styles={ getStyles(details.stats[0].base_stat) } >
                            { details.stats[0].base_stat }
                        </div>
                    </div>
                </div>

                <div className="attack-container stat">
                    <div className="label" >
                        ATK
                    </div>
                    <div className="stats-bar" >
                        <div className="attack-bar filled" >
                            { details.stats[1].base_stat }
                        </div>
                    </div>
                </div>

                <div className="defense-container stat" >
                    <div className="label" >
                        DEF
                    </div>
                    <div className="stats-bar" >
                        <div className="defense-bar filled" >
                            { details.stats[2].base_stat }
                        </div>
                    </div>
                </div>

                <div className="speed-container stat" >
                    <div className="label" >
                        SPD
                    </div>
                    <div className="stats-bar" >
                        <div className="speed-bar filled" >
                            { details.stats[5].base_stat }
                        </div>
                    </div>
                </div>

                <div className="exp-container stat" >
                    <div className="label" >
                        EXP
                    </div>
                    <div className="stats-bar" >
                        <div className="exp-bar filled" >
                            { details.base_experience }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PokemonDetail