import React from 'react';




export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn' 
       
    }

    const className = classNames[props.type] || classNames.primary;

    return (
        props.onClick ? 
            <button className={`${className} ${props.className}`}>{props.children}</button>:
            <a href="" className={`${className} ${props.className}`}>{props.children}</a> 
    )
}
