import React, { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiXCircle } from "react-icons/bi";
import { Image } from "semantic-ui-react";
import ButnLogOut from "../buttons/butnLogOut";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const [isNavShowing, setIsNavShowing] = useState(true);

  const closeMenuWhenClicked = () => {
    document.getElementById("myNav").style.width = "0%";

    document.getElementById("buttonRemove").style.display = "block";
    setIsNavShowing(true);
  };

  const menuOpenClose = () => {
    if (isNavShowing) {
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("buttonRemove").style.display = "none";
      setIsNavShowing(false);
    } else {
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("buttonRemove").style.display = "block";
      setIsNavShowing(true);
    }
  };

  return (
    <div>
      <Menu size="massive" stackable pointing>
        <Menu.Menu>
          <Menu.Item>
            <a
              href="#menu"
              onClick={() => {
                menuOpenClose();
              }}
            >
              <GiHamburgerMenu />
            </a>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu>
          <Image
            className="navLogo"
            spaced
            alt="Logo"
            as={Link}
            to="/u/"
            href="/u/"
            src="https://res.cloudinary.com/a20085909/image/upload/v1610756088/Logos_V2.2_jfc4oi.png"
          />
        </Menu.Menu>
        
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item id="buttonRemove">
            <ButnLogOut />
          </Menu.Item>
        </Menu.Menu>



        <Menu.Menu>
          <div id="myNav" className="overlay">
            <Menu.Item className="closebtn">
              <a
                href="#menu"
                onClick={() => {
                  menuOpenClose();
                }}
              >
                <BiXCircle />
              </a>
            </Menu.Item>

            <div id="myNavItems">
              <Menu.Item
                name="Home"
                as={Link}
                to="/u/"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />
              <Menu.Item
                name="Profile"
                as={Link}
                to="/u/profile"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />
              <Menu.Item
                name="Wit-Map"
                as={Link}
                to="/u/witmap"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />
              <Menu.Item
                name="Bounties"
                as={Link}
                to="/u/bounties"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />
              <Menu.Item
                name="Support"
                as={Link}
                to="/u/support"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />
              <Menu.Item>
                <ButnLogOut />
              </Menu.Item>
            </div>
          </div>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
