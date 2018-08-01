import React, { Component } from 'react';
import CardsList from './CardsList';
import cards from '../items';
import _orderBy from 'lodash/orderBy';
import Form from './Form'
import { Container } from 'semantic-ui-react';

class App extends Component {

  state = {
    cards: []
  };

  componentDidMount() {
    this.setState({ cards: this.sortCards(cards) });
  }

  sortCards = (cards) => _orderBy(cards, ['top','header'], ['desc', 'asc']);

  toggleCardSatus = (cardId) => {
    const cards = this.state.cards.map(card => {
      card.id === cardId && (card.top = !card.top);
      return card;
    })

    this.setState({ cards: this.sortCards(cards) });
  }

  toggleDescription = (e, cardId) => {
    e.preventDefault();
    const cards = this.state.cards.map(card => {
      card.id === cardId && (card.full = !card.full);
      return card;
    })

    this.setState({ cards: this.sortCards(cards) });
  }

  render() {
    const { cards } = this.state;
    return (
      <Container>
        <Form />
        <CardsList
          cards={cards}
          handleToggleCardStatus={this.toggleCardSatus}
          handleToggleCardDescription={this.toggleDescription}
        />
      </Container>
    );
  }
}

export default App;
