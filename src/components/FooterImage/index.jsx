import React from "react";
import BlockHouse from "../../assets/images/block-house-removebg-preview.png";
import styles from "./style.module.css";

export const FooterImage = () => {
  return (
    <div className={styles.footerimage}>
      <img src={BlockHouse} 
        className={styles.image}
      />
    </div>
  );
};
