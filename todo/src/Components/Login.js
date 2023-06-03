import React, { useState } from 'react'
import '../Css/Login.css'
// import  {checkuser}  from '../ApiCalls/apis'
import { useNavigate, useHistory } from "react-router-dom";
import  {checkuser}  from './api'
function Login() {
  const navigate = useNavigate();

  const [email,setemail]=useState()
  const [pass,setpass]=useState()

  const mail = (event)=>{
    setemail(event.target.value)
  }
  const pas = (event)=>{
    setpass(event.target.value)
  }

  const auth=async()=>{
    let ch = await checkuser(email,pass)
    // console.log(ch)
    if(ch.data[0]){
      document.cookie = `name=${ch.data[1]}`
     navigate('/home')
    }else{
      navigate('/sign')
    }
  }
  const newacc=()=>{
    
     navigate('/sign')
  }
  return (
    <div class="box2">
       
        <div class="form1">
          <h1 style={{marginTop:'20px',borderBottom:'solid black'}}>LogIn Page</h1>
          <div class="text">
             <input  type="email" name="email" id="" placeholder="Email" onChange={mail} /> 
          </div>
          <div class="text">
             <input  type="password" name="password" id="" placeholder="Password"  onChange={pas}/> 
          </div>
          <div>
            <button class="btn4" onClick={auth}>Login</button>
            <button class="btn5" onClick={newacc}  >New Account</button>      
          </div>
        </div>         
    </div>
  )
}

export default Login