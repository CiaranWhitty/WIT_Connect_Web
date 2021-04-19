import React from "react";
import { Menu } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import ButnLogOut from "../buttons/butnLogOut";
import { Link } from "react-router-dom";

export default function LoggedIn() {

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
        </a>{" "}
        <a
          id="MWLink"
          href="https://www.witconnect.ie/"
          target="_blank"
          rel="noreferrer"
          className="w3-bar-item w3-button"
        >
          Main Website
        </a>
      </div>
      <Menu id="headerMargin" size="massive" pointing>
        <Menu.Menu>
          <Image
            className="navLogo"
            centered
            alt="Logo"
            as={Link}
            to="/u/"
            href="/u/"
            src="https://res.cloudinary.com/a20085909/image/upload/v1610756088/Logos_V2.2_jfc4oi.png"
          />
        </Menu.Menu>
      </Menu>
      <Menu id="headerNav">
        <Menu.Item id="buttonRemove" position={"right"}>
          <ButnLogOut />
        </Menu.Item>
      </Menu>
    </div>
  );
}
