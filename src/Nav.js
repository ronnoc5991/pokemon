import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const [open, setOpen] = useState(false);

    function toggleMenu () {
        setOpen(!open);
    }

    return (
        <nav>
            <div className={`bar-container ${open ? 'open-container' : ''}`} onClick={ toggleMenu }>
                <div className={`bar bar-1 ${open ? 'open-1' : ''}`} onClick={ toggleMenu }></div>
                <div className={`bar bar-2 ${open ? 'open-2' : ''}`} onClick={ toggleMenu }></div>
                <div className={`bar bar-3 ${open ? 'open-3' : ''}`} onClick={ toggleMenu }></div>
            </div>
            <ul className={`${open ? 'open-nav' : ''}`}>
                <Link to="/pokemon/" onClick={ toggleMenu }>
                    <li title="Home" onClick={ toggleMenu }><i className="fa fa-home"></i></li>
                </Link>
                <Link to="/pokemon/search" onClick={ toggleMenu }> 
                    <li title="Search" onClick={ toggleMenu }><i className="fa fa-search"></i></li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

// the search feature should be linked to here... make it a separate component that takes input and searches via the api for the pokemon?