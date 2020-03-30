import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home, SignUp, LogIn } from "./pages";
import NavBar from "./components/Navbar";
import { lightTheme, darkTheme } from "./config/themes";

const App = () => {
  const [activeTheme, setActiveTheme] = useState(lightTheme);

  const changeTheme = () => {
    if (activeTheme === lightTheme) return setActiveTheme(darkTheme);
    return setActiveTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={LogIn} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
