import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./siteHeader.css";
import 'semantic-ui-css/semantic.min.css'
import { Menu, Sticky } from 'semantic-ui-react'
import { useAuth } from "../../contexts/AuthContext";
import ButnLogOut from '../buttons/butnLogOut'
import ButnSignIn from '../buttons/butnSignIn'

import { FaBars } from "react-icons/fa";

export default function SiteHeader() {
 
  const [isNavShowing, setIsNavShowing] = useState(false);

  const context = useAuth();
  
  return context.isAuthenticated ? (
    
    //When logged in
    <Sticky>
      {/* pointing secondary or borderless */}
      <Menu borderless size='huge' > 
        <Menu.Item position='left'
          name='WITConnect'
          as={Link} to='/u/'
          
        />

        <Menu.Menu position='right'>
        

          <nav id= "nav2" >
            <Menu.Item
              name='Profile'
              as={Link} to='/u/dashboard' 
            />

            <ButnLogOut />
          </nav>

          <Menu.Item>
            <a href="#top" onClick={() => {
              
              if(isNavShowing){
                document.getElementById("nav2").style.display = "block"
                setIsNavShowing(false)
              }
              else{
                document.getElementById("nav2").style.display = "none"
                setIsNavShowing(true)
              }

            }}>

              <FaBars/>
            </a>
          </Menu.Item>

        </Menu.Menu>
      
      </Menu>
      
    </Sticky>

  ) : (
//When logged out
    <Sticky>
      {/* pointing secondary or borderless */}
      <Menu borderless size='huge' > 
        
        <Menu.Item position='left'
          name='WITConnect'
          //active={activeItem === 'TMDB Client'}
          as={Link} to='/'
          //onClick={this.handleItemClick}
          
        />

        <Menu.Menu position='right'>
                      
          <nav id= "nav2" >

            <ButnSignIn />

          </nav>

          <Menu.Item>
            <a href="#top" onClick={() => {
              
              if(isNavShowing){
                document.getElementById("nav2").style.display = "block"
                setIsNavShowing(false)
              }
              else{
                document.getElementById("nav2").style.display = "none"
                setIsNavShowing(true)
              }

            }}>

              <FaBars/>
            </a>
          </Menu.Item>

        </Menu.Menu>
      
      </Menu>
      
    </Sticky>

  );
};