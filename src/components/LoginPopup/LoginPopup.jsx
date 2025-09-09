import React, { useState } from 'react'
import "./loginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({setLogin}) => {
    const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
       <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick = {()=>setLogin (false)}src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-inputs">
            {currState === "login" ? <></> :<input type='text' placeholder='your name' required /> }

            <input type='email' placeholder='enter your email' required />
            <input type='password' placeholder='password' required />
 
        </div>
        <button>{currState === "Sign up"? "Create account": "login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required/> 
            <p>By continuing, i agree all the terms and privacy policy</p>       
        </div>
        {currState === "login"
        ? <p>Crearte a new account  <span onClick={() => setCurrState("Sign Up")}>click here</span></p>
        :  <p>Already have account ? <span onClick={() =>setCurrState("login")}> login here</span></p>
    
        }
   
     
       </form>

    </div>
  )
}

export default LoginPopup