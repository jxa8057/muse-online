import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getErrorMessageForField } from "../../utils";
import { FirebaseContext } from "./../../config/firebase";
import { Page, Card, TextBox, Button, Headers } from "./../../components";
const { H2 } = Headers;

const SignUp = props => {
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
      password: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .required("Please enter a password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords don't match.")
        .required("Confirm your password")
    }),
    onSubmit: values => signUp(values)
  });

  const signUp = async values => {
    const { email, password } = values;

    try {
      await firebase.createUser(email, password);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }

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
            autoComplete="email"
            errorMessage={getErrorMessageForField("email", formik)}
          />
          <TextBox
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="new-password"
            errorMessage={getErrorMessageForField("password", formik)}
          />
          <TextBox
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            autoComplete="new-password"
            errorMessage={getErrorMessageForField("confirmPassword", formik)}
          />
          <Button disabled={formik.errors.length} type="submit">
            Sign Up
          </Button>
        </form>
      </Card>
    </Page>
  );
};

export default SignUp;
