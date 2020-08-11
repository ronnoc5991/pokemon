import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h4>Pokemon</h4>
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
