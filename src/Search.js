import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PokeBall } from './pokeball.svg'
import Go from './go.png'

function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [hidden, setHidden] = useState(true);
    const [searching, setSearching] = useState(true);
    const [pokemonData, setPokemonData] = useState({
        'abilities': [{'ability': {'name': '', 'url': ''}}],
        'types': [{'type': {'name': ''}}, {'type': {'name': ''}}],
        'stats': [{'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}, 
                  {'base_stat': '', 'stat': {'name':''}}],
        'name' : '',
        'species': ''
    })

    async function getSearchResults (e) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (searchTerm !== '') {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            let data = await response.json()
            setPokemonData(data);
            setSearching(false);
        }
    }

    useEffect(() => {
        console.log(pokemonData)
    }, [pokemonData] )

    useEffect(() => {
        if (searchTerm === '') {
            setSearching(true);
            setHidden(true)
        } else {
            setHidden(false)
        }
    }, [searchTerm])


    function updateSearchTerm (e) {
        setSearchTerm(e.target.value)
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
        <div className="search main" >
            <form>
                <label>
                    <input type="text" onChange={ updateSearchTerm } value={ searchTerm } placeholder="Search Pokemon by ID or name" />
                </label>
                <button type="submit"  id={ hidden ? 'hidden' : 'pulse-it' } onClick={ getSearchResults } ><img src={ Go } alt=""/></button>
            </form>
            <div className="search-result-container" >

                { searching ? <PokeBall /> : 
                <Link to={ `/pokemon/${pokemonData.id}` } >
                    <div className="search-result" >
                        { searching ? 'Searching' : <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`} alt=""/> }
                        <h1>{ pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1) }</h1>
                        <h2>{ makeIDNumber(pokemonData.id) }</h2>
                    </div>
                </Link>
                }

            </div>
        </div>
    )
}

export default Search