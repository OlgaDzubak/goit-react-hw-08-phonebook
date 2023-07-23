import { useState } from "react";   
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'; 
import css from './password.module.css';
import PropTypes from 'prop-types';

export const Password = (prop) => {

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
    }

    return (
        <>
            <label className={css.label_password}>
                Password
                <input className={css.input_password}
                    type={passwordType} 
                    name="password" 
                    pattern = {prop.pattern}
                    maxLength='15'
                    minLength='8'
                    required
                    title= "Password must contain minimum 8 maximum 15 symbols, at least one letter and, at least one number."
                    placeholder='password' 
                />
            
                <button className={css.eyeBtn} 
                        type="button"
                        onClick={togglePassword}>
                        { passwordType === "password" 
                            ? <i className="css.eyeClose"><AiOutlineEyeInvisible/></i> 
                            : <i className="css.eyeOpen"><AiOutlineEye/></i> 
                        }
                </button>
            </label>    
            
        </>
    )
}

Password.propTypes = {
    pattern : PropTypes.string,
};