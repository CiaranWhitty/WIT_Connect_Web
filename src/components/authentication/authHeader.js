import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";

import { AuthContext } from "./authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <Link className="nav-link text-white" onClick={() => context.signout()}>Sign out</Link>
  ) : (
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link text-white" onClick={() => history.push("/login")}>Login</Link>
      </li>  
      <li className="nav-item ">
        <Link className="nav-link text-white" onClick={() => history.push("/signup")}>Signup</Link>
      </li> 
    </ul>
  );
};

export default withRouter(BaseAuthHeader);

