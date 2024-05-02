import React from 'react';




export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        secondary: 'btn-secondary',
        tertiary: 'btn-tertiary',
        variant: 'btn-variant'
       
    }

    const className = classNames[props.type] || classNames.primary;

    return (
       
            <button className={`${className} ${props.className}`}>{props.children}
            </button>
    )
}
