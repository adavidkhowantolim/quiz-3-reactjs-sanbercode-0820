import React from "react"
import {LoginProvider} from "./login_context"
import LoginForm from "./login_form"
import './login.css';

const Login = () =>{
  return(
    <LoginProvider>
      <LoginForm/>
    </LoginProvider>
  )
}

export default Login