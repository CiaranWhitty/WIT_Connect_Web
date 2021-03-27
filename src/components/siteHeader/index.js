import { React, useEffect } from "react";
import "./siteHeader.css";
import "semantic-ui-css/semantic.min.css";
// import { Sticky } from 'semantic-ui-react'
import { useAuth } from "../../contexts/AuthContext";

import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function SiteHeader() {
  const context = useAuth();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  // Getting and checking IsAuthenticated to make such it is true
  useEffect(() => {
    const logData = window.localStorage.getItem("logItem");
    const logSaved = JSON.parse(logData);
    setIsAuthenticated(logSaved.isAuthenticated); // eslint-disable-next-line
  }, []);

  // Saving IsAuthenticated locally
  useEffect(() => {
    const logValue = { isAuthenticated };
    window.localStorage.setItem("logItem", JSON.stringify(logValue));
  });

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
