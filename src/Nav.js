import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PokeBall } from './pokeball.svg'

function Nav() {
    return (
        <nav>
            <div className="logo-container">
                <PokeBall />
            </div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
