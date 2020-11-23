import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import SiteHeader from './components/siteHeader'
import HomePage from "./pages/homePage";
import mapPage from './pages/mapPage';

import signupPage from "./components/SignUp";
import LoginPage from "./components/login";
import PrivateRoute from "./components/authentication/privateRoute";
import AuthProvider from "./components/authentication/authContext";


const App = () => {
  return (
<BrowserRouter>
  <AuthProvider>
    
      <div className="jumbotron">
        <SiteHeader />
        
        <div className="container-fluid">
          <Switch>
              
              <Route path="/map" component={mapPage} />
              <Route path="/signup" component={signupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/" component={HomePage} />

              <Redirect from="*" to="/" />
            </Switch>
          </div>
          
        </div>
    </AuthProvider>
</BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));