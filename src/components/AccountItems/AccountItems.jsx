import { Data } from "./Data";
import React from "react";
import styles from "./style.module.css";

export const AccountItems = () => {
  return (
    <div className={styles.AccountContainer}>
      <h5 className={styles.heading5}> Account </h5>
      <hr className={styles.hr} />
      {Data.map((Data) => (
        <div className={styles.boxWrapper}>
          <div className={styles.IconContainer}>
            <img className={styles.IconImage} src={Data.svg} />
            <p className={styles.description}>{Data.text}</p>
          </div>

          <img src={Data.forwardIcon} />
        </div>
      ))}
    </div>
  );
};
