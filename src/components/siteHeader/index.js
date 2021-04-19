import { React, useEffect } from "react";
import "./siteHeader.css";
import "semantic-ui-css/semantic.min.css";
// import { Sticky } from 'semantic-ui-react'
import { useAuth } from "../../contexts/AuthContext";

import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function SiteHeader() {
  const context = useAuth();

  return context.isAuthenticated ? (
    //When logged in
    <div className="siteHeader">
      <LoggedIn />
    </div>
  ) : (
    //When logged out
    <div className="siteHeader">
      <LoggedOut />
    </div>
  );
}
