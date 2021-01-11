import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

export default class AccordionExampleStyled extends Component {
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
      
      <Segment padded basic size={"big"}>

        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            First Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Content
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Second Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Content
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Third Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Content
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Fourth Year
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Content
            </p>
          </Accordion.Content>

        </Accordion>

      </Segment>

    )
  }
}
