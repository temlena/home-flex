import React from "react";
import Header from "../Header";
import { FooterImage } from "../FooterImage";
import Footer from "../Footer";
import styles from "./style.module.css";
import { CustomInput } from "../input";
import { CustomButton } from "../Button";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Skyscrapper from "../../assets/images/skyscrapper1.png"


export const ContactItem = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.deepblue}></div>
        <img src={Skyscrapper} alt="skyscrapper"className={styles.skyscrapper} />
        <div className={styles.lightblue}>
          <div className={styles.searchcontainer}>
            <CustomInput name="text" placeholder="The Search" />
            <h3 className={styles.title}>for your perfect home is over</h3>
            <p className={styles.description}>Home Flex, no stress.</p>
            <CustomButton type="tertiary"> Contact Us</CustomButton>
          </div>
        </div>
    
      </div>
      <div className={styles.formcontainer}>
        <div className={styles.formwrapper}>
          <div className={styles.formbox}>
            <CustomInput
              name="text"
              placeholder="Full Name"
              style={{
                width: "100%",
                background: "transparent",
                border: "1px solid #474646",
              }}
            />
            <CustomInput
              name="email"
              placeholder="Email"
              style={{
                width: "100%",
                background: "transparent",
                border: "1px solid #474646",
              }}
            />
            <textarea
              className={styles.textarea}
              rows={5}
              placeholder="Your message (optional)"
            />
            <CustomButton type="variant">Send Message</CustomButton>
          </div>

          <div className={styles.getintouch}>
            <h3 className={styles.heading3}>
              Get in <span>Touch</span>{" "}
            </h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur. Quis molestie eu tincidunt
              proin urna.Lorem ipsum dolor sit amet consectetur. Quis molestie
              eu tincidunt proin urna.
            </p>

            <div className={styles.infobox}>

              <div className={styles.box}>
                <div className={styles.flex}>
                  <CiLocationOn size={"2rem"} color={"#48BF9A"}/>
                  <p>Office Address</p>
                </div>
                <p>111 Hallway Road Airport Bus-stop, Lagos State</p>
              </div>
              <div className={styles.box}>
                <div className={styles.flex}>
                  <IoCallOutline size={"2rem"} color={"#48BF9A"} />
                  <p>Call Us</p>
                </div>
                <p>+2348027033502</p>
              </div>
              <div className={styles.box}>
                <div className={styles.flex}>
                  <CiMail size={"2rem"} color={"#48BF9A"}/>
                  <p>Mail Us</p>
                </div>
                <p>homeflex.ng@yahoo.com</p>
              </div>

             

            </div>
          </div>
        </div>
      </div>

      <FooterImage />
      <Footer />
    </div>
  );
};
