import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../config/firebase";
import { Page, Card, Headers, TextBox, Button, Link } from "./../../components";
const { H2 } = Headers;

const LogIn = props => {
  const firebase = useContext(FirebaseContext);
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

  const logIn = async values => {
    const { email, password } = values;
    try {
      console.log(email);
      console.log(password);
      const authUser = await firebase.signIn(email, password);
      console.log(authUser);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const forgotPassword = () => {};

  const getErrorMessageForField = fieldName => {
    if (formik.errors[fieldName] && formik.touched[fieldName])
      return formik.errors[fieldName];
    return null;
  };

  return (
    <Page>
      <Card size="small">
        <H2>Log In</H2>
        <form onSubmit={formik.handleSubmit}>
          <TextBox
            placeholder="Email Address"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            autoComplete="current-username"
            errorMessage={getErrorMessageForField("email")}
          />
          <TextBox
            placeholder="Password"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            type="password"
            autoComplete="current-password"
            errorMessage={getErrorMessageForField("password")}
          />
          <Button onClick={logIn}>Log In</Button>
        </form>
        <Link onClick={forgotPassword}>Forgot your password?</Link>
      </Card>
    </Page>
  );
};

export default LogIn;
