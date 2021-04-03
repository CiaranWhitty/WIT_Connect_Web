import React, { useState } from 'react';
import app from "../../../firebase/firebase"
import { useAuth } from "../../../contexts/AuthContext";
import { Button, Modal, TextArea, Select, Grid } from 'semantic-ui-react'

import './style.css'
import date from 'date-and-time';

function portfolioReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

export default function Portfolios() {

  const {currentUser} = useAuth()
  const userEmail = currentUser.email

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState();
  const [publicItem, setpublicItem] = useState(false);

  
  const now = new Date();
  const creationDate = date.format(now, 'ddd, MMM DD YYYY');

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeDescribe = (e) => {
    setDescription(e.target.value);
  };

  const createPortfolio = () => {
    const portfolioRef = app.database().ref("Portfolio");
    
    const portfolio = {
      userEmail,
      title,
      description,
      creationDate,
      year,
      publicItem,
    };

    portfolioRef.push(portfolio);
    dispatch({ type: 'CLOSE_MODAL' })

  };

  const [state, dispatch] = React.useReducer(portfolioReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  const yearsOptions = [
    { key: 'y1', value: 'y1', text: 'First Year' },
    { key: 'y2', value: 'y2', text: 'Second Year' },
    { key: 'y3', value: 'y3', text: 'Third Year' },
    { key: 'y4', value: 'y4', text: 'Fourth Year' },
  ]
  
  return (
    <div className="portfolioForm">
      
      <Grid centered columns={3}>

        <Grid.Column id="addToPortfolio" verticalAlign={'middle'}>
         <Button 
          onClick={() => dispatch({ type: 'OPEN_MODAL' })}
          >
          Add To Portfolio
          </Button>
        </Grid.Column>

      </Grid>
      

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Add an Item</Modal.Header>
          <Modal.Content>
              <input
              id="formTitle"
              type="text"
              placeholder="Title..."
              onChange={handleOnChangeTitle}
              required
              />
            
            <TextArea  
              id="formTextArea" 
              placeholder='Describe the Item...'
              onChange={handleOnChangeDescribe} 
              style={{ minHeight: 100 }} 
              required
            />
      
            <Select 
              id="formSelect" 
              placeholder='Select your Year'
              onChange={(e, { value }) => setYear( value )}  
              options={yearsOptions} 
              required
              
            />
            

          </Modal.Content>

        <Modal.Actions>

          <Button positive onClick={createPortfolio}>
            Add item
          </Button>

          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Cancel
          </Button>

        </Modal.Actions>
      </Modal>

    </div>
  );
}