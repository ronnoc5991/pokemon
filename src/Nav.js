import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PokeBall } from './pokeball.svg'
import logo from './pokemon.png'

function Nav() {
    return (
        <nav>
            <ul>
                <div className="sliding-rect">
                    <PokeBall />
                </div>
                <Link to="/pokemon/">
                    <li title="Home" ><i className="fa fa-home fa-lg"></i></li>
                </Link>
                <Link to="/pokemon/search"> 
                    <li title="Search"><i className="fa fa-search fa-lg"></i></li>
                </Link>
                <Link to="/pokemon/about">
                    <li title="About"><i className="fa fa-question-circle fa-lg"></i></li>
                </Link>
            </ul>
            <div className="logo-container">
                    <img src={ logo } alt=""/>
            </div>
        </nav>
    )
}

export default Nav

// the search feature should be linked to here... make it a separate component that takes input and searches via the api for the pokemon?