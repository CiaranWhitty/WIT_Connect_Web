import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import ButnSignIn from "../buttons/butnSignIn";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiXCircle } from "react-icons/bi";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  const [isNavShowing, setIsNavShowing] = useState(true);

  const closeMenuWhenClicked = () => {
    document.getElementById("myNav").style.width = "0%";

    document.getElementById("buttonRemove").style.display = "flex";
    setIsNavShowing(true);
  };

  const menuOpenClose = () => {
    if (isNavShowing) {
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("buttonRemove").style.display = "none";

      setIsNavShowing(false);
    } else {
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("buttonRemove").style.display = "flex";

      setIsNavShowing(true);
    }
  };

  return (
    <div id="headerFixed">
      <div className="w3-bar w3-black">
        <a href="#facebook" className="w3-bar-item w3-button">
          <i className="fa fa-facebook-official"></i>
        </a>
        <a href="#instagram" className="w3-bar-item w3-button">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#snapchat" className="w3-bar-item w3-button">
          <i className="fa fa-snapchat"></i>
        </a>
        <a href="#twitter" className="w3-bar-item w3-button">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#linkedin" className="w3-bar-item w3-button">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>

      <Menu id="headerMargin" size="massive" pointing>
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

          <Image
            className="navLogoLO"
            spaced
            alt="Logo"
            as={Link}
            to="/"
            href="/"
            src="https://res.cloudinary.com/a20085909/image/upload/v1610756088/Logos_V2.2_jfc4oi.png"
          />
        </Menu.Menu>

        <Menu.Item position="right" id="buttonRemove">
          <ButnSignIn />
        </Menu.Item>

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
                to="/"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />

              <Menu.Item
                name="Wit-Map"
                as={Link}
                to="/witmap"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
              />
              <Menu.Item
                name="Support"
                as={Link}
                to="/support"
                onClick={() => {
                  closeMenuWhenClicked();
                }}
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
