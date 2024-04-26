import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./style.module.css";
import WhybgImage from "../../assets/images/backgroundimage1.png";
import WhyImage from "../../assets/images/onboarding image1.png";
import HowbgImage from "../../assets/images/backgroundimage2.png";
import HowImage from "../../assets/images/onboarding image2.png";
import { FooterImage } from "../FooterImage"
import House from "../../assets/images/house3.jpg"
import Family from "../../assets/images/pngtree-happy-black-family-with-baby-png-image_11518385.png"


export const AboutHomeflexItem = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.heading}>About Home Flex</h3>
          <p className={styles.para}>
            Welcome to the future of financing. Our approach is all about
            supporting you in handling your obligations at your own pace or
            Flexible. We make financing easy, transparent, and tailored to your
            needs. With Home Flex and you'll only accrue interest on your
            remaining balance, giving you savings when you settle ahead of
            schedule. Our goal? To steer clear of any debt traps and empower you
            on your financial journey.
          </p>
        </div>

        <div className={styles.familyContainer}>
          <div className={styles.image1}>
            <img src={Family} alt="family"/>
          </div>
          <div className={styles.image2}>
            <img src={House} alt="house"/>
          </div>
        </div>

      </div>
      <div className={styles.missioncontainer}>
        <div className={styles.mission}>
          <h3 className={styles.heading3}>Our Mission</h3>
          <p>
            Our mission is to provide flexible and transparent financing
            solutions that empower individuals to manage their obligations at
            their own pace, while avoiding debt traps and fostering financial
            empowerment.
          </p>
        </div>
      </div>

      <div className={styles.Wrapper}>
        <div className={styles.whyContainer}>
          <div className={styles.Why}>
            <h3 className={styles.title}>Why</h3>
            <p className={styles.para1}>
              We believe everyone should be able to afford what they desire as
              they earn, without financial stress. Adulting and striking out on
              your own can be daunting, but we're here to lend a supportive hand
              along the way.
            </p>
          </div>

          <div className={styles.imageContainer}>
            <img src={WhybgImage} className={styles.bgImage1} alt="bgImage"/>

            <img src={WhyImage} className={styles.overlay1} alt="overlayImage" />
          </div>
        </div>

        <div className={styles.howContainer}>
          <div className={styles.imageContainer}>
            <img src={HowbgImage} className={styles.bgImage} alt="bgImage"/>

            <img src={HowImage} className={styles.overlay}alt="overlayImage" />
          </div>

          <div className={styles.How}>
            <h3 className={styles.heading3}>How</h3>
            <p className={styles.para1}>
              Get easy-access, collateral-free loans with a flexible repayment
              plan designed specifically for you and your budget. Home Flex
              enables you to pursue what you desire and need, such as a home,
              and pay for it gradually as you earn.
            </p>
          </div>
        </div>
      </div>
      <FooterImage />
      <Footer />
    </div>
  );
};
