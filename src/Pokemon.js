import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Pokemon.css'
import PokemonData from './PokemonData'

class Pokemon extends Component{
    state={
        pokeNumber:''
    }

    handleChange = (ev) =>{
        this.setState({ pokeNumber: ev.target.value})
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.history.push(`/pokemon/${this.state.pokeNumber}`)
        this.setState({pokeNumber: ''})
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
                        value={this.state.pokeNumber}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up Pokémon</button>
                    </div>
                 </form>
                 <Route path="/pokemon/:pokeNumber"  component={PokemonData}/>
                 <Route exact path="/pokemon" render={() => <h3>Enter a number to find a Pokémon </h3>} />
            </div>
        )
    }
}

export default Pokemon