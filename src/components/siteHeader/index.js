import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

import AuthHeader from "../authentication/authHeader";

import "./siteHeader.css";



const SiteHeader = () => {
  
  const [isNavShowing, setIsNavShowing] = useState(true);

  return (
    <div class="navContainer" id="navContainerjs">

      <nav id="navPadding" className="navbar  navbar-light fixed-top  bg-dark ">

        <ul id= "b" className="navbar-nav">
          <li className="nav-item">
            <a href="#" onClick={() => {
              
              if(isNavShowing){
                document.getElementById("nav2").style.display = "block"
                setIsNavShowing(false)
              }
              else{
                document.getElementById("nav2").style.display = "none"
                setIsNavShowing(true)
              }

            }}>

              <FontAwesomeIcon icon= "home" inverse />
            </a>
          </li>
        </ul>

        <nav id="logoText" className="navbar-brand text-white">
          <Link className=" text-white" to="/">
            WITConnect
          </Link>
        </nav>

        <span id= "a" className="navbar-text text-light">
          Connect, Collaborate, Create
        </span>
        <nav className="navbar navbar-expand ">
          <ul id= "a" className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/map">
                Map
              </Link>
            </li>
            <AuthHeader />
          </ul>
        </nav>
      </nav>

      <nav id= "nav2" >
          <ul className="navbar-nav">
            <li class="nav-item ">
                <Link className="nav-link text-white" to="/map">
                  Map
                </Link>
            </li>
            <AuthHeader />
          </ul>
        </nav>

    </div>
      
  );
};

export default SiteHeader;