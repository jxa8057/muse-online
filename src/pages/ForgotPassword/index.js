import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FirebaseContext } from "../../config/firebase";
import { Page } from "../../components";
import { TextBox } from "../../components";

const ForgotPasswordPage = props => {
  const firebase = useContext(FirebaseContext);
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter your email address.")
    }),
    onSubmit: values => handleForgotPasswordSubmit(values)
  });

  const handleForgotPasswordSubmit = async values => {
    const { email } = values;
    try {
      await firebase.sendPasswordResetEmail(email);
      props.history.push("reset-password");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page>
      <form onSubmit={formik.handleSubmit}>
        <TextBox errorMessage="" />
      </form>
    </Page>
  );
};

export default ForgotPasswordPage;
