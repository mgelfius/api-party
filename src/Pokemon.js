import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Pokemon.css'

class Pokemon extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="pokemon">
                <img className="poke-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
                  alt="Pokémon Logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        />
                    </div>
                    <div>
                        <button type="submit">Look up Pokémon</button>
                    </div>
                 </form>
            </div>
        )
    }
}

export default Pokemon