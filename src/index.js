import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/MyView/Pages/LoginPage.js";
import RegisterPage from "./views/MyView/Pages/RegisterPage";
import CreateProjectPage from "./views/MyView/Pages/CreateProject/CreateProjectPage";
import HomePage from "views/HomePage/HomePage.js";
import ProjectPage from "views/ProjectPage/ProjectPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
    <Switch>
      <Route path="/project/:projectName" component={ProjectPage}/>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/create-project" component={CreateProjectPage} />
      <Route path="/comp" component={Components} />
      <Route path="/" component={HomePage}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
