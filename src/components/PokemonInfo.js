import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  render() {
    return (
      <div>
        <h1>PokemonInfo</h1>
        <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}
