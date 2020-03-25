import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, SignUp, LogIn } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/log-in" component={LogIn} />
      </Switch>
    </Router>
  );
};

export default App;
