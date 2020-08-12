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
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
            <div className="logo-container">
                <img src={ logo } alt=""/>
            </div>
        </nav>
    )
}

export default Nav
