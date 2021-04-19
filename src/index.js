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
import HomePage from "./pages/homePage";
import LoginPage from "./pages/login";

const support = lazy(() => import("./pages/support"));

const students = lazy(() => import("./pages/students"));
const studentsPage = lazy(() =>
  import("./components/studentsComponents/studentsDetailsPage")
);
const portfolioItemPage = lazy(() =>
  import("./components/portfolioItemsComponents/portfolioItemsDetailsPage")
);

const Employers = lazy(() => import("./pages/employers"));
const employersPage = lazy(() =>
  import("./components/employersComponents/employersDetailsPage")
);
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
                <PrivateRoute
                  exact
                  path="/u/students/:uId"
                  component={studentsPage}
                />
                <PrivateRoute
                  exact
                  path="/u/students/:uId/:id"
                  component={portfolioItemPage}
                />
                <PrivateRoute path="/u/students" component={students} />
                <PrivateRoute
                  exact
                  path="/u/employers/:name"
                  component={employersPage}
                />
                {/* <PrivateRoute exact path="/u/employers/:eId/:id" component={} /> */}
                <PrivateRoute path="/u/employers" component={Employers} />
                <PrivateRoute path="/u/support" component={support} />
                <PrivateRoute exact path="/u/" component={homePage} />

                {/* Normal view */}
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={HomePage} />
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
