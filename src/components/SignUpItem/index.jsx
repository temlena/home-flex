import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { AccountItems } from "../AccountItems/AccountItems";
import { ProfileItem } from "../ProfileItem";
import styles from "./style.module.css"
import { FooterImage } from "../FooterImage";

export const SignUpItem = () => {
  return (
    <div>
      <Header />
      <div className={styles.container} >
        <AccountItems />
        <ProfileItem />
      </div>
      <div className={styles.FooterImageContainer}>
      <FooterImage />
      </div>
    
      <Footer />
    </div>
  );
};
