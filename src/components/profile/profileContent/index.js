import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'
import PortfoliosForm from '../../portfolioComponents/portfolioForm'
import PortfoliosList from '../../portfolioComponents/portfolioMain'

import './style.css'

export default class ProfileAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      
      
      <Segment id = "portfolioCon" padded basic size={"big"}>
        <Segment attached='top'>
        
        <PortfoliosForm />
        
        </Segment>

        <Accordion fluid styled>
{/*  */}
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            First Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            
            <h1>Items:</h1>
            
            <PortfoliosList />

          </Accordion.Content>
{/*  */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Second Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
          
          <h1>Items:</h1>
            
          </Accordion.Content>
{/*  */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Third Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
          
          <h1>Items:</h1>
            
          </Accordion.Content>
{/*  */}
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Fourth Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
          
          <h1>Items:</h1>
            
          </Accordion.Content>
{/*  */}
        </Accordion>

      </Segment>

    )
  }
}
