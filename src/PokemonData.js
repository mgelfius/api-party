import React, { Component } from 'react'
import './PokemonData.css'

class PokemonData extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            pokeData: {}
        }

        this.fetchUserData(props)
    }

    fetchUserData = (props) =>{
        fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokeNumber}/`)
        .then(response => response.json())
        .then(pokeData => this.setState({ pokeData }))
        console.log(this.state.pokeData)
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged){
            this.fetchUserData(nextProps)
        }
    }

    render(){
        return (
            <div className="pokemon-data">
                <h3>Pokémon #{this.state.pokeData.id}</h3>
                <h2>Name: {this.state.pokeData.name}</h2>
                <h2>Height: {this.state.pokeData.height} feet</h2>
                <h2>Weight: {this.state.pokeData.weight} pounds</h2>
            </div>
        )
    }
}

export default PokemonData