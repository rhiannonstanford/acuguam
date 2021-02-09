import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import "./index.css"

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import "@fontsource/raleway" // Defaults to weight 400 with all styles included.
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import ServicesPage from "./ServicesPage/ServicesPage.jsx";
import ContactPage from "./ContactPage/ContactPage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";


let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/services-page" component={ServicesPage} />  
      <Route path="/contact-page" component={ContactPage} />  
      <Route path="/" component={AboutPage} />
      <Route path="/about-page" component={AboutPage} />
    </Switch>
  </Router>
);
