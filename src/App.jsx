import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Resume from "./CV/Resume";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
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
