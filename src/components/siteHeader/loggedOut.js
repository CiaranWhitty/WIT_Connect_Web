import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import ButnSignIn from '../buttons/butnSignIn'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiXCircle } from "react-icons/bi";
import { Image } from 'semantic-ui-react'

export default function LoggedOut (){
  
  const [isNavShowing, setIsNavShowing] = useState(true);
  
  return (
    
    <div>
    <Menu size='massive' pointing>

      {/* Add burger menu here */}
      
      <Menu.Item>
        <a 
        href="#menu"
        onClick={() => { 
          if(isNavShowing){
            document.getElementById("mySidenav").style.width = "100%"
            document.getElementById("buttonRemove").style.display = "none"
            setIsNavShowing(false)
          }
          else{
            document.getElementById("mySidenav").style.width = "0%"
            document.getElementById("buttonRemove").style.display = "block"
            setIsNavShowing(true)
          }
          

        }}>
          
        <GiHamburgerMenu/>
        </a>
        
      </Menu.Item>
      
      <Image
          className="navLogo"
          spaced          
          alt='Logo'
          size='big'
          href="/"
          src='https://res.cloudinary.com/a20085909/image/upload/v1610756088/Logos_V2.2_jfc4oi.png'
          
        />
      
        
      <Menu.Menu position='right'>
        <div id="mySidenav" class="sidenav"> 
        
          <Menu.Item>
            <a
            href="#menu"
            onClick={() => {
              if(isNavShowing){
                document.getElementById("mySidenav").style.width = "100%"
                document.getElementById("buttonRemove").style.display = "none"
                setIsNavShowing(false)
              }
              else{
                document.getElementById("mySidenav").style.width = "0%"
                document.getElementById("buttonRemove").style.display = "block"
                setIsNavShowing(true)
              }

            }}>
              <BiXCircle/>
            </a>
          </Menu.Item>
          
          <a href="/">Home</a>
          <a href="/witmap">WitMap</a>
          <a href="/bounties">Bounties</a>
          <a href="/mentors">Mentors</a>
          <a href="/support">Support</a>
          <a href="/login">Sign In</a>

        </div>
        <Menu.Item
        id="buttonRemove"
        >
          <ButnSignIn />
        </Menu.Item>

      </Menu.Menu>
    
    

    </Menu>

  </div>

    );
}