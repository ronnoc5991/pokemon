import React from 'react'

function About() {
    return (
        <div className="about main">
            <div>
                <h1>Hello!</h1>
                <h2>Thank you for checking out my project.</h2>
            </div>

            <div>
                <h3>This project was undertaken in order to gain more experience in:</h3>
                
                <h4>Retrieving data from third party APIS</h4>
                
                <h4>Asynchronous Javascript</h4>

                <h4>React.JS</h4>
            </div>
            <div>
                <h3>This project was made possible thanks to:</h3>
                <h4><a href="https://pokeapi.co/"> PokeAPI </a></h4>
                <h4><a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"> Bulbapedia </a></h4>
                <h4><a href="https://pokeres.bastionbot.org/">Pokeres API</a></h4>
            </div>
        </div>
    )
}

export default About
