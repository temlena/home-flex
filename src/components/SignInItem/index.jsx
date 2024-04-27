import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CustomButton } from "../Button";
import styles from "./style.module.css";
import BackArrow from "../../assets/images/Arrow 2.svg";
import facebook from "../../assets/facebook.svg";
import google from '../../assets/icons/google-icon.svg'
import { useNavigate } from 'react-router-dom';

export const SignInItem = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/SignUpPage')// Go back to the previous page
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/login';
    console.log('facebook handled!');
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/login';
    console.log('google handled!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxcontainer}>
        <div className={styles.arrowwrapper}>
          <img src={BackArrow} onClick={handleBackClick} alt="arrow" />
        </div>
        <div className={styles.getstarted}>
          <div className={styles.textcontainer}>
            <h4 className={styles.heading4}>Welcome back!</h4>
            <p className={styles.para}>
            Log back in to continue the experience
            </p>
            <div className={styles.longbar}>
              <div className={styles.shortbar}></div>
            </div>
          </div>
          <div className={styles.box}>
            <Formik initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              >
              <Form className="w-full">
              <Field
                  className=" my-2 p-6 w-full h-5 rounded bg-transparent border-[#01C598] border-2 text-text"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-error"
                />
                <Field
                  className=" my-2 p-6 w-full h-5 rounded bg-transparent border-[#01C598] border-2 text-text"
                  type="password"
                  id="password"
                  maxLength={8}
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-error"
                />
                
              </Form>
            </Formik>

            <CustomButton type="login" >
              Sign in
            </CustomButton>

            <div className={styles.hrline}>
              <div className={styles.leftline}></div>
              <p className={styles.centeredtext}>or</p>
              <div className={styles.rightline}></div>
            </div>

            <CustomButton type="secondary" >
              <img src={facebook} onClick={handleFacebookLogin} alt="facebook"/>
              Continue with Facebook
            </CustomButton>
            <CustomButton type="secondary" >
            <img src={google} onClick={handleGoogleLogin} alt="google"/>
              Continue with google
            </CustomButton>
            
            <p className={styles.parentpara}>Don’t Have an Account?
            <a href="/SignUpPage" > Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
