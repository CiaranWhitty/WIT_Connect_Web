import React from "react";

import "./signup.css";

const signUpPage= () => {

  return (
    <>
      <div id="signupContainer">
        <h2>SignUp Page</h2>
            
        <form id="signinForm">
          <input
            name="username"
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            type="password"
            placeholder="Confirm Password"
          />

        </form>
        
        <button class="btnSignUp" type="submit">Sign Up</button>

      </div>
    </>
  );
};

export default signUpPage;