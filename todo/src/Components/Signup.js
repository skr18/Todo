import React, { useState } from 'react'
import '../Css/Signup.css'
import { adduser } from './api'
import { useNavigate, useHistory } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')

  const na = (event)=>{
    setname(event.target.value)
  }
  const em = (event)=>{
    setemail(event.target.value)
  }
  const pa = (event)=>{
    setpass(event.target.value)
  }

  const adus=async()=>{
    await adduser(name,email,pass)
    navigate('/home')

  }
  return (
    <div class="box4">
        <div class='forms'>
            <h1 style={{marginTop: '10px',borderBottom: 'solid black'}}>SignIn Page</h1>
            <h3 style={{marginTop: '10px',color: 'red'}}>Look's Like You Don't Have An Account With Us</h3>
            <h3 style={{marginTop: '10px',color: 'red'}}>Create Your Accout Here</h3>
            <div class="text4">
              <input onChange={na} class='def' type="text" name="name" id="" placeholder="Name" required/> 
            </div>
            <div class="text4">
              <input onChange={em} class='def' type="email" name="email" id="" placeholder="Email" required/> 
            </div>
            <div class="text4">
              <input onChange={pa} class='def' type="password" name="password" id="" placeholder="Password" required/> 
            </div>
            <button class="btn8" onClick={adus}>Submit</button>    
          </div>
    </div>
  )
}

export default Signup