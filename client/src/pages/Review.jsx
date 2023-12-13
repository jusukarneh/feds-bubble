import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <div className='form' >

      
      <Form className='subform'>
        
        <Form.Group inline>
          <label>Rating</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Four'
            value='4'
            checked={value === '4'}
            onChange={this.handleChange}
          /><Form.Field
          control={Radio}
          label='Five'
          value='5'
          checked={value === '5'}
          onChange={this.handleChange}
        />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Feedback'
          placeholder='Tell us about your experience...'
          className='textname'
        />
        
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }
}

export default FormExampleFieldControl