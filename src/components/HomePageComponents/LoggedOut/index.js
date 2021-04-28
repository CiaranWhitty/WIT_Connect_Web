import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HomePageLO() {
  return (
    <>
      <div className="homePage">
        <header className="w3-container w3-blue w3-center" id="headerHomePage">
          <h1 className="w3-margin w3-jumbo">WIT Connect</h1>
          <Button as={Link} to="/signup" size="big" color="black">
            Join Today!
          </Button>
        </header>

        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>REACT JS</h1>
              <h5 className="w3-padding-32">
                React is one of the most popular JavaScript Library created and
                maintained by Facebook and community members. It is also one of
                newest web platforms being compared with other new platforms
                like Angular which is maintained and developed by Google.
              </h5>

              <p className="w3-text-grey">
                I am choosing it for its popularity, features and constant
                support by Facebook and the community to keep it updated and for
                it “future proofing” as its going to be around for the long
                term. React will allow me to build an interactive website that
                give students/users a great experience
              </p>
            </div>

            <div className="w3-third w3-center">
              <i
                id="iconREACTJS"
                className="fab fa-react w3-padding-64 w3-text-blue"
              ></i>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i
                id="iconFIREBASE"
                className="fas fa-fire w3-padding-64 w3-text-amber w3-margin-right"
              ></i>
            </div>
            {/*  */}
            <div className="w3-twothird">
              <h1>FIREBASE</h1>
              <h5 className="w3-padding-32">
                Main reason that I am using firebase is for its
                complete eco systems to handle things like cloud signups and
                logins and cloud storage for user data. Firebase will allow me
                to use these features to set up one database and have both web
                and mobile platforms to write and pull data and have them
                consisted whatever platform users are on.
              </h5>

              <p className="w3-text-grey">
                The three main parts of the eco system I will be using are
                Firebase Realtime Database, Firebase Authentication, Firebase
                Storage. All three are crucial to most of the features within
                the project, such as the creating, updating, deleting, reading
                of portfolio data and will allow other users to view other
                portfolios.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>AWS</h1>
              <h5 className="w3-padding-32">
                I am using Amazon Web Services for its performance and its great
                scalability, so in the future when more students use the
                platform it can scale accordingly.
              </h5>

              <p className="w3-text-grey">
                The specific service I will be using is called AWS Amplify. AWS
                Amplify allows me to use a GitHub repository and when I push
                code to GitHub AWS Amplify will automatically rebuild and update
                the website within a couple of minutes.
              </p>
            </div>

            <div className="w3-third w3-center">
              <i
                id="iconAWS"
                className="fab fa-aws w3-padding-64 w3-text-orange"
              ></i>
            </div>
          </div>
        </div>

        <footer className="w3-container  w3-black w3-padding-64 w3-center w3-opacity">
          <div className="w3-xlarge w3-padding-32">
            <i className="fa fa-facebook-official w3-hover-opacity" id="iconPadding"></i>
            <i className="fa fa-instagram w3-hover-opacity" id="iconPadding"></i>
            <i className="fa fa-snapchat w3-hover-opacity" id="iconPadding"></i>
            <i className="fa fa-twitter w3-hover-opacity" id="iconPadding"></i>
            <i className="fa fa-linkedin w3-hover-opacity" ></i>
          </div>
          <p>
            Developed by <a href="http://ciaranwhitty.com/">Ciaran Whitty</a>
          </p>
        </footer>
      </div>
    </>
  );
}
