import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Loader, Dimmer } from "semantic-ui-react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./contexts/AuthContext";
import SiteHeader from "./components/siteHeader";
import homePage from "./pages/homePage";

import signupPage from "./pages/signUp";
import loginPage from "./pages/login";
import updateProfile from "./pages/UpdateProfile";
import ForgotPassword from "./pages/userFunction/forgotPassword";
import updatePassword from "./pages/userFunction/updatePassword";
import updateDetails from "./pages/userFunction/updateDetails";

const mapPage = lazy(() => import("./pages/mapPage"));
const support = lazy(() => import("./pages/support"));
const students = lazy(() => import("./pages/students"));
const mentors = lazy(() => import("./pages/mentors"));
const Profile = lazy(() => import("./pages/profile"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <SiteHeader />
          <div className="contentMain">
            <Suspense
              fallback={
                <Dimmer active>
                  <Loader
                    active
                    size="massive"
                    inline="centered"
                    content="Loading"
                  />
                </Dimmer>
              }
            >
              {/* <h2>loading...</h2> */}
              {/* <Loader active inline='centered' /> */}
              <Switch>
                {/* When logged in */}
                <PrivateRoute exact path="/u/witmap" component={mapPage} />
                <PrivateRoute exact path="/u/support" component={support} />
                <PrivateRoute exact path="/u/students" component={students} />
                <PrivateRoute exact path="/u/mentors" component={mentors} />
                <PrivateRoute exact path="/u/profile" component={Profile} />
                <PrivateRoute
                  exact
                  path="/u/update-details"
                  component={updateDetails}
                />
                <PrivateRoute
                  exact
                  path="/u/update-password"
                  component={updatePassword}
                />
                <PrivateRoute
                  exact
                  path="/u/update-profile"
                  component={updateProfile}
                />
                <PrivateRoute exact path="/u/" component={homePage} />

                {/* Normal view */}
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/login" component={loginPage} />
                <Route path="/signup" component={signupPage} />
                <Route path="/witmap" component={mapPage} />
                <Route path="/support" component={support} />
                <Route path="/mentors" component={mentors} />

                <Route path="/" component={homePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Suspense>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
