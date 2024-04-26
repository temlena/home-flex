import React, { useState } from "react";
import styles from "./style.module.css";
import camaraIcon from "../../assets/images/camera-icon.png";
import { CustomInput } from "../input";
import { DropdownMenu } from "../DropdownMenu";
import { CustomButton } from "../Button";

export const ProfileItem = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("");

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profile}>
        <h5 className={styles.heading5}> Profile</h5>
        <hr />
        <div className={styles.wrapper}>
          <img className={styles.camera} src={camaraIcon} alt="camera"/>
        </div>

        <p className={styles.user}> Evangeline</p>
        <hr />
      </div>

      <div className={styles.signupform}>
        <CustomInput type="text" placeholder={"Full Name"} />
        <CustomInput type="text" placeholder={"Last Name"} />
        <CustomInput type="Email" placeholder={"Email"} />
        <CustomInput type="number" placeholder={"Phone Number"} />
        <CustomInput type="text" placeholder={"Date of Birth"} />
        <div className={styles.menucontainer}>
          <DropdownMenu
            label="Gender"
            options={genderOptions}
            selectedValue={selectedGender}
            onSelectedValueChange={setSelectedGender}
          />
          <DropdownMenu
            label="marital status"
            options={maritalStatusOptions}
            selectedValue={selectedMaritalStatus}
            onSelectedValueChange={setSelectedMaritalStatus}
          />
        </div>
        <div className={styles.btnwrapper}>
          <CustomButton type="btn" onClick={() => {}}>
            submit
          </CustomButton>
        </div>

        <div className={styles.linktext}>
          <p className={styles.description}>
            Click
            <a href="#">  here  </a>
            to contact customer support to edit the information here
          </p>
        </div>
      </div>
    </div>
  );
};
