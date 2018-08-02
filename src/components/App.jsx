import React, { Component } from 'react';
import CardsList from './CardsList';
import cards from '../items';
import _orderBy from 'lodash/orderBy';
import Form from './Form'
import { Container, Menu, Icon, Divider } from 'semantic-ui-react';

class App extends Component {

  state = {
    cards: [],
    showForm: false,
    editCard: {}
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
    const card = {
      ...data,
      id: this.state.cards.length + 1,
    }

    const cards = data.id ?
                  this.sortCards(this.state.cards.map(item => item.id === data.id ? data : item))
                  :
                  this.sortCards([...this.state.cards, card]);

    this.setState({
      cards,
      showForm: false,
      editCard: {}
    });
  }

  editCard = (id) => {
    const card = this.state.cards.filter(card => {
      return card.id === id
    })

    !card.lenght && this.setState({ editCard: card[0], showForm: true });
  }

  render() {
    const { cards, showForm, editCard } = this.state;
    return (
      <Container>
        <Menu>
          <Menu.Item
            name='editorials'
          >
            Editorials
          </Menu.Item>

          <Menu.Item
            name='form'
            onClick={this.toggleForm}
          >
            Add card
            <Icon name={showForm ? 'minus' : 'plus'} size='small'/>
          </Menu.Item>
        </Menu>
        { showForm &&
          <Form
            addCard={ this.addCard }
            card={editCard}
          />
        }
        <Divider />
        <CardsList
          cards={cards}
          handleToggleCardStatus={this.toggleCardSatus}
          handleToggleCardDescription={this.toggleDescription}
          editCard={this.editCard}
        />
      </Container>
    );
  }
}

export default App;
