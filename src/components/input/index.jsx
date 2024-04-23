import React from 'react'
import style from './style.module.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


export const CustomInput = ({label, ...props}) => {
    const [show, setShow] = React.useState(false)
    let type = props.type
    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconChange = () => {
        setShow(!show)
    }
    return (
        <div className={style.wrapper}>  

            <label>{label}</label>
            <input 
                {...props}
                type = {type}
            />

            {
                props.type === 'password' && 
                <div onClick={handleIconChange} className={style['eye-icon']} >
                    {
                        !show ?
                        <AiOutlineEyeInvisible size={"1.2rem"} /> :
                        <AiOutlineEye size={"1.2rem"} />
                    }
                        
                </div>
            }
         
        </div>
    )
}


