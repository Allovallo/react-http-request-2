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

      this.setState({ loading: true, pokemon: null });

      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Помилка! Покемону ${nextName} немає!`));
        })
        .then(pokemon => this.setState({ pokemon }))
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
        {error && <h1>{error.message}</h1>}
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
