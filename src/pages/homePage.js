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
        <div id="homePageContainer">
          <Link to="/u/students">
            <Button>Students</Button>
          </Link>
          <Link to="/u/employers">
            <Button>Employers</Button>
          </Link>
        </div>
      </div>
    </>
  ) : (
    //When logged out
    <>
      <div className="homePage">
        <div id="homePageContainer">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
