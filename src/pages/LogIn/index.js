import React, { useState } from "react";
import Page from "./../../components/Page";
import Card from "./../../components/Card";
import TextBox from "./../../components/TextBox";
import Button from "./../../components/Button";
import { H2 } from "./../../components/Headers";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTextChange = e => {
    const { name: fieldName, value } = e.target;
    if (fieldName === "username") setUsername(value);
    if (fieldName === "password") setPassword(value);
  };

  const logIn = () => {};

  return (
    <Page>
      <Card>
        <H2>Log In</H2>
        <TextBox
          placeholder="Username"
          value={username}
          name="username"
          onChange={handleTextChange}
        />
        <TextBox
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleTextChange}
        />
        <Button onClick={logIn}>Log In</Button>
      </Card>
    </Page>
  );
};

export default LogIn;
