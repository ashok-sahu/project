import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

import TextError from "./TextError";
import styles from "./Login.module.css";

const initialValues = {
  userID: "",
  password: "",
};

const validationSchema = Yup.object({
  userID: Yup.string()
    .required("userid is Required")
    .min(5, "userID too short"),
  password: Yup.string()
    .required("password is Required")
    .min(5, "password too short"),
});

const Login = () => {
  let loggedIn = false
  const [formValues, setFormValues] = useState(null);
  const [userId, setUserId] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [LogedIn, setLogedIn] = useState(loggedIn)

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    console.log("submitProps", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    if(values.userID===userId && values.password === password){
      toast.success("login successful !");
      setLogedIn(true)
    }else{
      toast.error("login failed !");
      setLogedIn(false)
    }
  };

  if(LogedIn){
    return <Redirect from="/" to="/dashboard" />
  }

  return (
    <div className={styles.container}>
      <div className={styles.login_bg}>
        <div className={styles.login_top}></div>
        <div className={styles.login_body}>
          <div className={styles.body_icon}>
            <div className={styles.login_lock}></div>
            <div className={styles.loginText}>Login</div>
          </div>
          <div className={styles.form_field}>
            <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
              {(formik) => {
                console.log("Formik props", formik);
                return (
                  <Form className={styles.form}>
                    <div className={styles.userId}>
                      <Field type="text" id="userID" name="userID" placeholder="user id" className={styles.userIdField} />
                    </div>
                    <ErrorMessage name="userID" component={TextError}>{(error) => <div className={styles.error}>{error}</div>}</ErrorMessage>
                    <div className={styles.password}>
                      <Field type="password" id="password" name="password" placeholder="Password" className={styles.passwordField} />
                    </div>
                    <ErrorMessage name="password" component={TextError}>{(error) => (<div className={styles.error}>{error}</div>)}</ErrorMessage>
                    <button type="submit" disabled={!formik.isValid || formik.isSubmitting} className={styles.button}></button>
                    <div className={styles.forget}>Don't remember the password ?</div>
                  </Form>
                )}}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
