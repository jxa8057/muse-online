import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getErrorMessageForField } from "../../utils";
import { FirebaseContext } from "../../config/firebase";
import { Page, TextBox, Modal, Headers, Button, Card } from "../../components";
const { H2 } = Headers;

const ForgotPasswordPage = props => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
    setShowModal(true);
    setModalMessage("Sent password reset email, please check your inbox.");
    return;
    const { email } = values;
    try {
      const response = await firebase.sendPasswordResetEmail(email);
      console.log(response);
      setShowModal(true);
      setModalMessage("Sent password reset email, please check your inbox.");
    } catch (error) {
      setShowModal(true);
      setModalMessage("Error sending reset email, please try again.");
      console.log(error);
    }
  };

  return (
    <Page>
      <Card size="small">
        <H2>Forgot Password</H2>
        <form onSubmit={formik.handleSubmit}>
          <TextBox
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            errorMessage={getErrorMessageForField("email", formik)}
          />
          <Button type="submit">Send reset email</Button>
        </form>
      </Card>
      {showModal && (
        <Modal
          message={modalMessage}
          onConfirm={() => props.history.push("/reset-password")}
        />
      )}
    </Page>
  );
};

export default ForgotPasswordPage;
