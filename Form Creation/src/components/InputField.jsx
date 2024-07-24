import { useState } from "react"

const  InputField = ({type,placeholder,icon})  => {
//state to toggle password visibility 
const [isPasswordShown, setIsPasswordShown] =useState(false);


  return (
    <div className="input-wrapper">
    <input 
    type={isPasswordShown ? 'text' : type} 
    placeholder={placeholder} className="input-field" 
    required 
    />
    <i className={icon}></i>
    {
        type === 'password' && (
<i  onClick={() => setIsPasswordShown(prevstate => !prevstate)} className={isPasswordShown ? "fa-solid fa-eye eye-icon" : "fa-solid fa-eye-slash eye-icon"}>
    
</i>        )
    }
  </div>
  )
}

export default InputField
