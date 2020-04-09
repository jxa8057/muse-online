import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home, SignUp, LogIn, ForgotPassword, ResetPassword } from "./pages";
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
        <Route component={NavBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
