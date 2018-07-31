import React, { Component } from 'react';
import CardsList from './CardsList';
import cards from '../items';

class App extends Component {

  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({ cards });
  }

  toggleCardSatus = (cardId) => {
    const cards = this.state.cards.map(card => {
      card.id === cardId ? card.top = !card.top : card.top;
      return card;
    })

    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    return (
      <CardsList
        cards={cards}
        logs={this.toggleCardSatus}
      />
    );
  }
}

export default App;
