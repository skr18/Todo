import React from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom'
function Home() {
    
  return (
    <div>
        <div className="container">
            <div className="logo">
                <img className="im" src="https://t3.ftcdn.net/jpg/04/47/30/46/360_F_447304624_hZxoo9hpk8GtxoqjyyO9SU1MZr6c55bw.jpg" alt="" />
            </div>
            <div className="info">
                
                {/* <form action="/login" >
                    <button className="btn1">Home</button>
                </form> */}

                <form action="login">
                        <button className="btn3">LogIn</button>
                 </form>           
            </div>
        </div>
        <div className='welcome'>
            <h1 className='title'>Welcome To Skr's Todo site</h1>
            <h2 className='title2'>Login First To Use It</h2>
        </div>
    </div>
  )
}

export default Home

// import React, { useState } from 'react'
// import './Login.css'
// import { checkuser } from '../ApiCalls/apis'
// import  { Redirect } from 'react-router-dom'

// function Login() {
//   const [email,setemail]=useState('')
//   const [pass,setpass]=useState('')

//   const mail = (event)=>{
//     setemail(event.target.value)
//   }
//   const pas = (event)=>{
//     setpass(event.target.value)
//   }

//   function chuser(){
//     let ch = checkuser(email,pass)
//     // if(ch){
//     //   <Redirect path='/Home2'/>
//     // }else{
//     //   <Redirect path='/Signup'/>
//     // }
//   }
//   return (
//     <div class="box">
       
//         <form method="post" action="val" class="form1">
//           <h1 style={{marginTop:'20px',borderBottom:'solid black'}}>LogIn Page</h1>
//           <div class="text">
//              <input onChange={mail} type="email" name="email" id="" placeholder="Email" /> 
//           </div>
//           <div class="text">
//              <input onChange={pas} type="password" name="password" id="" placeholder="Password" /> 
//           </div>
//           <div>
//             <button class="btn" onClick={chuser()}>Login</button>
//             <button class="btn2" formaction="sign" method="get" >New Account</button>      
//           </div>
//         </form>         
//     </div>
//   )
// }

// export default Login


// import React from 'react'
// import './Landing.css'
// function Landing() {
//   return (
//     <div>
//      <div class="container">
//         <div class="logo">
//             <a href="localhost:3000/">
//                 <img class="im" src="https://t3.ftcdn.net/jpg/04/47/30/46/360_F_447304624_hZxoo9hpk8GtxoqjyyO9SU1MZr6c55bw.jpg" alt=""/>
//             </a>
//         </div>
//         <div class="info">
//             <form action="/" >
//                 <button class="btn1">Home</button>
//             </form>
                
//                 <form method="get" action="pro" >
//                     <button class="btn2">Profile</button>
//                 </form>
                
//                 <form method="get" action="logout">
//                     <button class="btn3">Logout</button>
//                 </form>           
//         </div>
//     </div>
//     <h2 id="aniket"></h2>
//     <div class="box">
//         <h1 style="margin-top: 10px;">
//             Add your Todo
//         </h1>
//         <div>
//             <form method="post" action="data" class="task-f">
//                 <input type="text" name="task" placeholder="Task Name" id="tsk" required/>
//                 <input type="text" name="taskmessage" placeholder="Task Description" id="msg" required/>
//                 <button id="bt">submit</button>
//             </form>
//         </div>
//         <div id="dig">
//             <h1 style="margin-top: 10px;" >Your Tasks</h1>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Landing