import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class AddForm extends Component {
  state = {
    title: '',
    img: '',
    subscribers: 0,
    description: '',
    top: true
  }

  handleChange = (e, {name, value, checked}) => {
    const val = checked === undefined ? value : checked;
    this.setState({ [name]: val });
  }

  render() {
    return (
      <Form>
        <Form.Input
          fluid
          label='Card title'
          placeholder='Card title'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Card img'
            placeholder='Card img'
            name='img'
            value={this.state.img}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label='Subscribers'
            placeholder='Subscribers'
            type='number'
            name='subscribers'
            value={this.state.subscribers}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label='Description'
          placeholder='Tell us more ...'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Form.Checkbox
          label='Is it top?'
          name='top'
          checked={this.state.top}
          onChange={this.handleChange}
        />
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    )
  }
}