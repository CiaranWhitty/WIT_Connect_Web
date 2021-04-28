import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HomePageLI() {
  return (
    <>
      <div className="homePage">
        <header className="w3-container w3-blue w3-center" id="headerHomePage">
          <h1 className="w3-margin w3-jumbo">WIT Connect</h1>
          <Button as={Link} to="/u/students" size="big" color="black">
            Start Connecting!
          </Button>
        </header>

        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Connect</h1>
              <h5 className="w3-padding-32">
                “Connect ” through the website by searching for other students
              </h5>

              <p className="w3-text-grey">-</p>
            </div>

            <div className="w3-third w3-center">
              <i
                id="iconConnect"
                className="fas fa-people-arrows w3-padding-64 w3-text-red"
              ></i>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i
                id="iconCollaborate"
                className="fas fa-people-carry w3-padding-64 w3-text-red w3-margin-right"
              ></i>
            </div>

            <div className="w3-twothird">
              <h1>Collaborate</h1>
              <h5 className="w3-padding-32">
                “Collaborate” by contacting a student with the contact
                information on a student’s profile
              </h5>

              <p className="w3-text-grey">-</p>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Create</h1>
              <h5 className="w3-padding-32">
                “Create” by going through the last two steps, and end up
                creating “something” they have a common interest in
              </h5>

              <p className="w3-text-grey">-</p>
            </div>

            <div className="w3-third w3-center">
              <i
                id="iconCreate"
                className="far fa-check-square w3-padding-64 w3-text-red"
              ></i>
            </div>
          </div>
        </div>

        <footer className="w3-container  w3-black w3-padding-64 w3-center w3-opacity">
          <div className="w3-xlarge w3-padding-32">
            <i
              className="fa fa-facebook-official w3-hover-opacity"
              id="iconPadding"
            ></i>
            <i
              className="fa fa-instagram w3-hover-opacity"
              id="iconPadding"
            ></i>
            <i className="fa fa-snapchat w3-hover-opacity" id="iconPadding"></i>
            <i className="fa fa-twitter w3-hover-opacity" id="iconPadding"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </div>
          <p>
            Developed by <a href="http://ciaranwhitty.com/">Ciaran Whitty</a>
          </p>
        </footer>
      </div>
    </>
  );
}
