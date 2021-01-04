import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'semantic-ui-css/semantic.min.css'
import "./index.css";

import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./contexts/AuthContext";
import SiteHeader from "./components/siteHeader";
import HomePage from "./pages/homePage";
import signupPage from './pages/signUp'
import loginPage from './pages/login'
import ForgotPassword from "./pages/forgotPassword";
import UpdateProfile from "./components/userFunction/UpdateProfile";
const Dashboard = lazy(() => import("./pages/dashboard"));

const App = () => {

  return (
  <>
  
    <div className="content">
      <BrowserRouter>
      <AuthProvider>
          <div className="jumbotron">
            <SiteHeader />
            <div className="container-fluid">
                  <Suspense fallback={<h1>Loading page....</h1>}>
                    <Switch>    
                      
                      {/* When logged in */}
                      <PrivateRoute exact path="/u/dashboard" component={Dashboard} />
                      <PrivateRoute exact path="/u/update-profile" component={UpdateProfile} />
                      <PrivateRoute exact path="/u/" component={HomePage} />
                      
                      {/* Normal view */}
                      <Route path="/forgotpassword" component={ForgotPassword} />
                      <Route path="/login" component={loginPage} />
                      <Route path="/signup" component={signupPage} />
                    
                      <Route path="/" component={HomePage} /> 
                      <Redirect from="*" to="/" />

                    </Switch>
                  </Suspense>
            </div>
          </div>
          </AuthProvider>
        </BrowserRouter>
      </div>
    {/* Background animation - https://codepen.io/chris22smith/pen/RZogMa */}
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>

  </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));