import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import ButnSignIn from '../buttons/butnSignIn'

export default class siteHeader2 extends Component {
  state = { activeItem: 'WITConnect' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu size='huge' stackable pointing>

          {/* Add burger menu here */}

          <Menu.Item
            name='WITConnect'
            active={activeItem === 'WITConnect'}
            onClick={this.handleItemClick}
            as={Link} to='/'
          />

          <Menu.Menu position='right'>

            <Menu.Item
              name='WitMap'
              active={activeItem === 'WitMap'}
              onClick={this.handleItemClick}
              as={Link} to='/witmap'
            />
            <Menu.Item
              name='Bounties'
              active={activeItem === 'Bounties'}
              onClick={this.handleItemClick}
              as={Link} to='/bounties'
            />
            <Menu.Item
              name='Mentors'
              active={activeItem === 'Mentors'}
              onClick={this.handleItemClick}
              as={Link} to='/mentors'
            />
            <Menu.Item
              name='Support'
              active={activeItem === 'Support'}
              onClick={this.handleItemClick}
              as={Link} to='/support'
            />
            <Menu.Item>
              <ButnSignIn />
            </Menu.Item>
          </Menu.Menu>

        </Menu>

      </div>
    )
  }
}
