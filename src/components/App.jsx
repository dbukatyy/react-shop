import React, { Component } from 'react';
import CardsList from './CardsList';
import cards from '../items';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';
import { Route } from 'react-router-dom'
import Form from './Form'
import { Container, Divider } from 'semantic-ui-react';

class App extends Component {

  state = {
    cards: [],
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

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  addCard = (data) => {
    let cards = [];

    if (data.id) {
      cards = this.sortCards(this.state.cards.map(item => item.id === data.id ? data : item));
    } else {
      const card = {
        ...data,
        id: this.state.cards.length + 1,
      }

      cards = this.sortCards([...this.state.cards, card]);
    }

    this.setState({
      cards,
      editCard: {}
    });

    this.props.history.push('/form');
  }

  deleteCard = (id) => {
    const cards = this.sortCards(this.state.cards.filter(item => item.id !== id));

    this.setState({ cards });
    this.props.history.push('/form');
  }

  getCard = (match) => {
    return _find(this.state.cards, ['id', Number(match.params.id)]) || {}
  }

  render() {
    const { cards, editCard } = this.state;
    return (
      <Container>
        <Route path="/form" exact render={({match}) => (
            <Form
              addCard={ this.addCard }
              card={ this.getCard(match) }
            />
          )}
        />
        <Route path="/form/:id" render={({ match }) => (
            <Form
              addCard={ this.addCard }
              card={ this.getCard(match) }
            />
          )}
        />
        <Divider />
        <CardsList
          cards={cards}
          handleToggleCardStatus={this.toggleCardSatus}
          handleToggleCardDescription={this.toggleDescription}
          delCard={this.deleteCard}
        />
      </Container>
    );
  }
}

export default App;
