import React, { Component } from 'react';

export default class App extends Component {
  state = {
    pockemon: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch('http://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(pockemon => this.setState({ pockemon }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {this.state.loading && <div>...Завантажуємо!..</div>}
        {this.state.pockemon && <div>{this.state.pockemon.name}</div>}
      </div>
    );
  }
}
