import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Resume from "./CV/Resume";
import Bot from "./Bot/Bot";
import ProjectPallet from "./Projects/ProjectsPallet";
import landingpage from "./LandingPage/landingpage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Bot />
        <Switch>
          <Route exact path="/projects" component={ProjectPallet} />
          <Route exact path="/" component={landingpage} />
          <Route exact path="/home" component={landingpage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
