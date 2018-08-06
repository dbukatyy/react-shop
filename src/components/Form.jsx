import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Message, Grid } from 'semantic-ui-react'

export default class AddForm extends Component {
  state = {
    data: {
      id: null,
      header: '',
      image: '',
      subscribers: 0,
      description: '',
      top: true
    },
    err: {}
  }

  handleChange = (e, {name, value, checked}) => {
    const val = checked === undefined ? value : checked;
    const data = {
      ...this.state.data,
      [name]: val
    };
    this.setState({ data });
  }

  formValidate = () => {
    const { header, image, subscribers, description } = this.state.data;
    const err = {};
    const EMPTY_MSG = 'Field can not be emty';
    const LESS_ZIRO = 'Field can not be less 0';

    header || (err.header = EMPTY_MSG);
    image || (err.image = EMPTY_MSG);
    description || (err.description = EMPTY_MSG);
    subscribers === '' && (err.subscribers = EMPTY_MSG);
    subscribers < 0 && (err.subscribers = LESS_ZIRO);
    return err;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const err = this.formValidate();
    this.setState({ err });
    Object.keys(err).length || this.props.addCard(this.state.data);
  }

  componentDidMount() {
    this.props.card.id && this.setState({ data: this.props.card });
  }

  componentWillReceiveProps({ card }) {
    card.id !== this.props.card.id && this.setState({ data: card });
  }

  render() {
    const { header, image, subscribers, description, top } = this.state.data;
    const err = this.state.err;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          error={!!err.header}
          fluid
          label='Card title'
          placeholder='Card title'
          name='header'
          value={header}
          onChange={this.handleChange}
        />
        {err.header && <Message size='mini' color='red'>{err.header}</Message>}
        <Grid columns='equal'>
          <Grid.Column>
            <Form.Input
              error={!!err.image}
              fluid
              label='Card img'
              placeholder='Card img'
              name='image'
              value={image}
              onChange={this.handleChange}
            />
            {err.image && <Message size='mini' color='red'>{err.image}</Message>}
          </Grid.Column>
          <Grid.Column>
            <Form.Input
              error={!!err.subscribers}
              fluid
              label='Subscribers'
              placeholder='Subscribers'
              type='number'
              name='subscribers'
              value={subscribers}
              onChange={this.handleChange}
            />
            {err.subscribers && <Message size='mini' color='red'>{err.subscribers}</Message>}
          </Grid.Column>
        </Grid>
        <Form.TextArea
          error={!!err.description}
          label='Description'
          placeholder='Tell us more ...'
          name='description'
          value={description}
          onChange={this.handleChange}
        />
        {err.description && <Message size='mini' color='red'>{err.description}</Message>}
        <Form.Checkbox
          label='Is it top?'
          name='top'
          checked={top}
          onChange={this.handleChange}
        />
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    )
  }
}

AddForm.propTypes = {
  addCard: PropTypes.func.isRequired,
  card: PropTypes.object
}