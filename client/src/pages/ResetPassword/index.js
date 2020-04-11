import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getErrorMessageForField } from "./../../utils";
import { FirebaseContext } from "../../config/firebase";
import { Page, TextBox, Card, Button, Headers } from "../../components";
const { H2 } = Headers;

const ResetPasswordPage = props => {
  const firebase = useContext(FirebaseContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter your email address."),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .required("Please enter a password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords don't match.")
        .required("Confirm your password")
    }),
    onSubmit: values => handleResetPasswordSubmit(values)
  });

  const handleResetPasswordSubmit = async values => {
    const { password } = values;
    try {
      await firebase.updatePassword(password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page>
      <Card size="small">
        <H2>Reset Password</H2>
        <form onSubmit={formik.handleSubmit}>
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
            Reset Password
          </Button>
        </form>
      </Card>
    </Page>
  );
};

export default ResetPasswordPage;
