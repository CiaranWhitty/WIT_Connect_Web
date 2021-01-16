import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import ButnSignIn from '../buttons/butnSignIn'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiXCircle } from "react-icons/bi";
import { Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function LoggedOut (){
  
  const [isNavShowing, setIsNavShowing] = useState(true);
  
  return (
    
    <div>
      <Menu size='massive' stackable pointing>
        <Menu.Menu>
        
        <Menu.Item>
          <a 
          href="#menu"
          onClick={() => { 
            if(isNavShowing){
              document.getElementById("myNav").style.width = "100%"
              document.getElementById("buttonRemove").style.display = "none"
              setIsNavShowing(false)
            }
            else{
              document.getElementById("myNav").style.width = "0%"
              document.getElementById("buttonRemove").style.display = "block"
              setIsNavShowing(true)
            }
            

          }}>
            <GiHamburgerMenu/>
          </a> 
        </Menu.Item>
        </Menu.Menu>
        
        <Menu.Menu >
            <Image
                className="navLogo"
                spaced          
                alt='Logo'
                as={Link}
                to='/'
                href="/"
                src='https://res.cloudinary.com/a20085909/image/upload/v1610756088/Logos_V2.2_jfc4oi.png'
                
              />
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item
            id="buttonRemove"
            >
              <ButnSignIn />
            </Menu.Item>
          </Menu.Menu>

        <Menu.Menu >
          <div id="myNav" class="overlay"> 
            <Menu.Item class="closebtn">
              <a
              href="#menu"
              onClick={() => {
                if(isNavShowing){
                  document.getElementById("myNav").style.width = "100%"
                  document.getElementById("buttonRemove").style.display = "none"
                  setIsNavShowing(false)
                }
                else{
                  document.getElementById("myNav").style.width = "0%"
                  document.getElementById("buttonRemove").style.display = "block"
                  setIsNavShowing(true)
                }

              }}>
                <BiXCircle/>
              </a>
            </Menu.Item>

              <div id="myNavItems"> 

                <Menu.Item
                  name='Home'
                  as={Link} to='/'
                />

                <Menu.Item
                  name='Wit-Map'
                  as={Link} to='/witmap'
                />
                <Menu.Item
                  name='Bounties'
                  as={Link} to='/bounties'
                />
                <Menu.Item
                  name='Mentors'
                  as={Link} to='/mentors'
                />
                <Menu.Item
                  name='Support'
                  as={Link} to='/support'
                />

                <Menu.Item>
                  <ButnSignIn />
                </Menu.Item>

              </div>
            </div>
            
        </Menu.Menu>
      </Menu>
    </div>

    );
}