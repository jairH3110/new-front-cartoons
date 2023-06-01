import React, {useEffect, useState} from "react"
import {auth,provider} from '../firebase'
import { signInWithPopup } from "firebase/auth"
import App from "../App"
import { Routes } from "react-router-dom";

function SignIn(){
  const[value,setValue] = useState('')

  const handleClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
       localStorage.setItem("email",data.user.email)
      })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[setValue]);

 return(


  
  <div>
    {
      value?<App/>:
      <button onClick={handleClick}> Signin con google</button> 
    }
    <Routes>




</Routes>
  </div>
  
 ); 

}

export default SignIn;
