import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import {AuthContext} from '../authentication/authContext'

import "./login.css";

const LoginPage = props => {
  const context = useContext(AuthContext)

  const login = () => {
    context.authenticate("user1", "pass1");
  };
  
  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <div id="signinContainer">
        <h2>Login page</h2>
        <p>You must log in to view more features </p>

          <form id="signinForm" >
            
            <input
              name="email"
              type="text"
              placeholder="Email Address"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
            />
            
          </form>
          
        <button class="btnSignIn" onClick={login}>Log in</button>
        
      </div>
    </>
  );
};

export default LoginPage;
