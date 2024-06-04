function fetchPokemon(name) {
  return fetch(`http://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Помилка! Покемону ${name} немає!`));
  });
}

const api = { fetchPokemon };
export default api;
