import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pokemon from './Pokemon'

function Search() {

    const [searchTerm, setSearchTerm] = useState('');
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
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        let data = await response.json()
        setPokemonData(data);
        setSearching(false);
    }

    useEffect(() => {
        console.log(pokemonData)
    }, [pokemonData] )

    function updateSearchTerm (e) {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search main" >
            <form>
                <label>
                    <input type="text" onChange={ updateSearchTerm } value={ searchTerm } />
                </label>
                <button onClick={ getSearchResults } >Submit</button>
            </form>
            <div className="search-result-container" >
                <Link to={ `/pokemon/${pokemonData.id}` } >
                    <div className="search-result" >
                        { searching ? 'Searching' : <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`} alt=""/> }
                        <h1>{ pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1) }</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Search