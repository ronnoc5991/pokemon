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
                <div className={`bar ${open ? 'open-1' : 'bar-1'}`} onClick={ toggleMenu }></div>
                <div className={`bar ${open ? 'open-2' : 'bar-2'}`} onClick={ toggleMenu }></div>
                <div className={`bar ${open ? 'open-3' : 'bar-3'}`} onClick={ toggleMenu }></div>
            </div>
            <ul className={`${open ? 'open-nav' : ''}`}>
                <Link to="/pokemon/">
                    <li title="Home" onClick={ toggleMenu }><i className="fa fa-home"></i></li>
                </Link>
                <Link to="/pokemon/search"> 
                    <li title="Search" onClick={ toggleMenu }><i className="fa fa-search"></i></li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

// the search feature should be linked to here... make it a separate component that takes input and searches via the api for the pokemon?