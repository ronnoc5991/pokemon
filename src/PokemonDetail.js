import React, { useEffect } from 'react'

function PokemonDetail({ match }) {

    function getDetails () {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    useEffect(() => {
        getDetails();
    }, [])

    console.log(match.params.id);

    return (
        <div className="detail main">
            Hello from Detail
        </div>
    )
}

export default PokemonDetail
