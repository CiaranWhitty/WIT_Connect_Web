import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">

      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          WITConnect
        </Link>
      </nav>

      <span className="navbar-text text-light">
        Connect, Collaborate, Create
      </span>

      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/map">
              Map
            </Link>
          </li>

        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;