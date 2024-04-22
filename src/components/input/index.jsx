import React from "react";
import style from "./style.module.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const CustomInput = ({ ...props }) => {
  let type = props.type;

  return (
    <div className={style.wrapper}>
      <input {...props} type={type} />
    </div>
  );
};
