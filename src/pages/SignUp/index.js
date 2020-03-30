import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FirebaseContext } from "./../../config/firebase";
import Page from "./../../components/Page";
import Card from "./../../components/Card";
import TextBox from "./../../components/TextBox";
import Button from "./../../components/Button";
import { H2 } from "./../../components/Headers";

const SignUp = () => {
  const firebase = useContext(FirebaseContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().required("Please enter a password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords don't match.")
        .required("Confirm your password")
    }),
    onSubmit: values => signUp(values)
  });

  const signUp = values => {
    console.log(values);
  };

  return (
    <Page>
      <Card size="small">
        <H2>Sign Up</H2>
        <form onSubmit={formik.handleSubmit}>
          <TextBox
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            placeholder="Email Address"
          />
          <TextBox
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            placeholder="Password"
            type="password"
          />
          <TextBox
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
          <Button onClick={signUp} type="submit">
            Sign Up
          </Button>
        </form>
      </Card>
    </Page>
  );
};

export default SignUp;
