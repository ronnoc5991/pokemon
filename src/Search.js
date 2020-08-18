import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Search() {

    const [searchTerm, setSearchTerm] = useState('');
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
        // console.log(data);
        setPokemonData(data);
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
            <div>
                <Link to={ `/pokemon/${pokemonData.id}` }>
                    { pokemonData.name }
                </Link>
            </div>
        </div>
    )
}

export default Search
