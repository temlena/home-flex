import React from "react";
import style from "./style.module.css";


export const CustomInput = ({label, ...props}) => {
    let type = props.type
  

    return (
        <div className={style.wrapper}>  
            <input 
                {...props}
                type = {type}
            />  
        </div>
    )
}


