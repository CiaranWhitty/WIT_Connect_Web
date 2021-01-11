import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import ButnLogOut from '../buttons/butnLogOut'

export default class siteHeader2 extends Component {
  state = { activeItem: 'Profile' }

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
            as={Link} to='/u/'
          />

          <Menu.Menu position='right'>
            
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>

            
            <Menu.Item
              name='WitMap'
              active={activeItem === 'WitMap'}
              onClick={this.handleItemClick}
              as={Link} to='/u/witmap'
            />
            <Menu.Item
              name='Bounties'
              active={activeItem === 'Bounties'}
              onClick={this.handleItemClick}
              as={Link} to='/u/bounties'
            />
            <Menu.Item
              name='Mentors'
              active={activeItem === 'Mentors'}
              onClick={this.handleItemClick}
              as={Link} to='/u/mentors'
            />
            <Menu.Item
              name='Support'
              active={activeItem === 'Support'}
              onClick={this.handleItemClick}
              as={Link} to='/u/support'
            />
            <Menu.Item
              name='Profile'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
              as={Link} to='/u/profile'
            />
            <Menu.Item>
              <ButnLogOut />
            </Menu.Item>
          </Menu.Menu>
          
        </Menu>

      </div>
    )
  }
}