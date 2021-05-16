import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Resume from "./CV/Resume";
import Bot from "./Bot/Bot";
import ProjectPallet from "./Projects/ProjectsPallet";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Bot />
        <Switch>
          <Route exact path="/projects" component={ProjectPallet} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
