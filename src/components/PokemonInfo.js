import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Змінилося ім`я покемону!');

      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => response.json())
        .then(pokemon => this.setState({ pokemon: pokemon }));
    }
  }

  render() {
    return (
      <div>
        <h1>PokemonInfo</h1>
        {!this.props.pokemonName && <div>Введіть ім`я покемону!</div>}
        {this.state.pokemon && this.state.pokemon.name}
      </div>
    );
  }
}
