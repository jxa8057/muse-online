import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Page, Card, Headers, TextBox, Button, Link } from "./../../components";
const { H2 } = Headers;

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email address is invalid")
        .required("Email address is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: values => logIn(values)
  });

  const logIn = values => {
    console.log(values);
  };
  const forgotPassword = () => {};

  return (
    <Page>
      <Card size="small">
        <H2>Log In</H2>
        <form>
          <TextBox
            placeholder="Email Address"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
          />
          <TextBox
            placeholder="Password"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            type="password"
          />
          <Button onClick={logIn}>Log In</Button>
        </form>
        <Link onClick={forgotPassword}>Forgot your password?</Link>
      </Card>
    </Page>
  );
};

export default LogIn;
