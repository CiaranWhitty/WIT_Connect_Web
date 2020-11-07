import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"

import SiteHeader from './components/siteHeader'
import HomePage from "./pages/homePage";
import mapPage from './pages/mapPage'

const App = () => {
  return (
<BrowserRouter>
  <div className="jumbotron">
    <SiteHeader />
    
    <div className="container-fluid">
      <Switch>
          
          <Route path="/map" component={mapPage} />

          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
      
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));