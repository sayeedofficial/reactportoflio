import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Resume from "./CV/Resume";
import Bot from "./Bot/Bot";
import ProjectPallet from "./Projects/ProjectsPallet";
import landingpage from "./LandingPage/landingpage";
import Footer from "./Footer/footer";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Bot />
        <Switch>
          <Route exact path="/" component={landingpage} />
          <Route exact path="/home" component={landingpage} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={ProjectPallet} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
