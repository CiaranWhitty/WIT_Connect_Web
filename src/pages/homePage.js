import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const context = useAuth();

  return context.isAuthenticated ? (
    //When logged in
    <>
      <div className="homePage">
        <header className="w3-container w3-red w3-center" id="headerHomePage">
          <h1 className="w3-margin w3-jumbo">START PAGE</h1>
          <Button as={Link} to="/u/students" size="big" color="black">
            Search!
          </Button>
        </header>

        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h5>

              <p className="w3-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="w3-third w3-center">
              <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
            </div>

            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h5>

              <p className="w3-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
          <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
        </div>

        <footer className="w3-container w3-padding-64 w3-center w3-opacity">
          <div className="w3-xlarge w3-padding-32">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </div>
          <p>
            Developed by <a href="http://ciaranwhitty.com/">Ciaran Whitty</a>
          </p>
        </footer>
      </div>
    </>
  ) : (
    //When logged out
    <>
      <div className="homePage">
        <header className="w3-container w3-red w3-center" id="headerHomePage">
          <h1 className="w3-margin w3-jumbo">START PAGE</h1>
          <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">
            Get Started
          </button>
        </header>

        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h5>

              <p className="w3-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="w3-third w3-center">
              <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
            </div>

            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h5>

              <p className="w3-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
          <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
        </div>

        <footer className="w3-container w3-padding-64 w3-center w3-opacity">
          <div className="w3-xlarge w3-padding-32">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </div>
          <p>
            Developed by <a href="http://ciaranwhitty.com/">Ciaran Whitty</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
