import React from "react";
import { CustomInput } from "../input";
import { CustomButton } from "../Button";
import styles from "./style.module.css";
import BackArrow from "../../assets/images/Arrow 2.svg";
import facebook from "../../assets/facebook.svg";
import google from '../../assets/icons/google-icon.svg'
import { useNavigate } from 'react-router-dom';

export const SignUpItem = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/')
  };

  const handleSignIn = () => {
    navigate('/SignInPage')
  };
  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/login';
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/login';
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxcontainer}>
        <div className={styles.arrowwrapper}>
          <img src={BackArrow} onClick={handleBackClick} />
        </div>
        <div className={styles.getstarted}>
          <div className={styles.textcontainer}>
            <h4 className={styles.heading4}>Let’s Get Started</h4>
            <p className={styles.para}>
              Create your perfect life and flex, no stress
            </p>
            <div className={styles.longbar}>
              <div className={styles.shortbar}></div>
            </div>
          </div>
          <div className={styles.box}>
            <CustomInput type="text" placeholder={"Full Name"} />
            <CustomInput type="Email" placeholder={"Email"} />
            <CustomInput type="password" placeholder={"Password"} />
            <CustomButton type="login" >
              Sign up
            </CustomButton>

            <div className={styles.hrline}>
              <div className={styles.leftline}></div>
              <p className={styles.centeredtext}>or</p>
              <div className={styles.rightline}></div>
            </div>

            <CustomButton type="secondary"  >
              <img src={facebook} onClick={handleFacebookLogin}/>
              Continue with Facebook
            </CustomButton>
            <CustomButton type="secondary">
            <img src={google}  onClick={handleGoogleLogin} />
              Continue with google
            </CustomButton>
            
            <p className={styles.parentpara}>Already Have an Account?
            <a onClick={handleSignIn}> Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
