import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Змінилося ім`я покемону!');

      this.setState({ loading: true });

      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => response.json())
        .then(pokemon => this.setState({ pokemon: pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        <h1>PokemonInfo</h1>
        {error && <h1>Помилка! Покемону {pokemonName} немає!</h1>}
        {loading && <div>...Завантажуємо!..</div>}
        {!pokemonName && <div>Введіть ім`я покемону!</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              width="240"
              alt="pokemon-name"
            />
          </div>
        )}
      </div>
    );
  }
}
