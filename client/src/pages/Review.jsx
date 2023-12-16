import React, {  useState } from 'react'
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

function FormExampleFieldControl (){

const[formState, setformState]= useState({
  rating:"", feedback:""
})
const  handleChange = e => setformState({...formState,[e.target.name]:e.target.value })

 
   
    return (
        <div className='form' >

      
      <Form className='subform'>
        
        <Form.Group inline>
          <label>Rating</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={formState.rating === '1'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={ formState.rating === '2'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={formState.rating  === '3'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Four'
            value='4'
            checked={formState.rating === '4'}
            onChange={handleChange}
          /><Form.Field
          control={Radio}
          label='Five'
          value='5'
          checked={ formState.rating === '5'}
          onChange={handleChange}
        />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Feedback'
          placeholder='Tell us about your experience...'
          className='textname'
          onchange={handleChange}
          name= "feedback"
          value={
            formState.feedback
          }
        />
        
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  
}

export default FormExampleFieldControl