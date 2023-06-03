import React, { useEffect, useState } from 'react'
// import { useNavigate, useHistory } from "react-router-dom";
import '../Css/Landing.css'
import { addtask, deltask, edittask, showtask } from './api';
import {Table,TableHead,TableBody,TableRow,TableCell } from "@mui/material"
function Landing() {
//   const navigate = useNavigate();
  const[user,setuser]=useState('')
  const [title,settitle]=useState()
  const [des,setdes]=useState()
  const [date,setdate]=useState()

  const tit = (event)=>{
    settitle(event.target.value)
  }
  const ds = (event)=>{
    setdes(event.target.value)
  }
  const dat = (event)=>{
    setdate(event.target.value)
  }

  let x = document.cookie
  let name = x.substring(5)

  const [task,settask] = useState([])

  useEffect(()=>{
    distask();
    disuser();
  }, [])

  const disuser =()=>{
    setuser(name)
  }
  const distask = async()=>{
    const ts = await showtask(name)
    settask(ts.data)
  }

  const adtsk = async()=>{
    let ch = await addtask(title,des,name,date)
    console.log(ch)
    if(ch.data){
        distask()
        settitle('')
        setdes('')
        setdate('')
    }
    
  }

  const taskdelete= async(id)=>{
    // console.log(id)
    let ch = await deltask(id)
    if(ch.data){
        distask()
    }
  }

  const taskedit= async(utask,udes,udate,id)=>{
    settitle(utask)
    setdes(udes)
    setdate(udate)
  }
  const updatestatus = async(id)=>{
    let ch = await edittask(id)
    console.log(ch.data)
    if(ch.data){
        distask()
    }
  }
  return (
    <div>
     <div class="container1">
        <div class="logo">
            <a href="localhost:3000/">
                <img class="im" src="https://t3.ftcdn.net/jpg/04/47/30/46/360_F_447304624_hZxoo9hpk8GtxoqjyyO9SU1MZr6c55bw.jpg" alt=""/>
            </a>
        </div>
        <div class="info">
           
                <h2 style={{marginTop:10,marginRight:15}} >
                    Hello, {user}
                </h2>
                <a href="https://forms.gle/bm5pVYBaGvmrwTqG6" target='__blank'>
                    <button class="btn1">Feedback</button>
                </a>
                
                <form method="get" action="/">
                    <button class="btn38">Logout</button>
                </form>           
        </div>
    </div>
    {/* <h2 id="aniket"></h2> */}
    <div class="box">
        
        <div>
            {/* <div class="task-f">
                <div>
                    <input onChange={tit} type="text" name="task" placeholder="Task Name" id="tsk" required value={title} />
                    <input type="date" name="date" id="dt" />
                </div>
                <div>
                   <input onChange={ds} type="text" name="taskmessage" placeholder="Task Description" id="msg" required value={des} />
                    <button onClick={adtsk} id="bt" >submit</button>
                </div>
            </div> */}
             <div className='new-expense'>
                    <h1 style={{marginTop: '-10px',marginBottom:17}}>
                        Add your Todo
                    </h1>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" onChange={tit} value={title} name="task" placeholder="Task Name" />
                    </div>
                    <div className='new-expense__control'>
                        <label>Description</label>
                        <input onChange={ds} type="text" name="taskmessage" placeholder="Task Description" required value={des}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date"  onChange={dat} value={date} name='date'/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={adtsk} >Add Task</button>
                </div>
             </div>
        </div>
        <div id="dig">
            <h1 style={{marginTop: '8px',marginBottom:10}} >Your Tasks</h1>
           <Table style={{marginLeft:10}} >
                <TableHead>
                    <TableRow style={{backgroundColor:'#e7daf2'}}>
                        <TableCell>Task</TableCell>
                        <TableCell>Desciption</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {                        
                        task.map(data =>(                      
                            <TableRow>
                                <TableCell>{data.task}</TableCell>
                                <TableCell>{data.description}</TableCell>
                                <TableCell>{data.date}</TableCell>

                                    <TableCell><input onClick={()=>updatestatus(data._id)} type="checkbox" checked={data.status} style={{width:20}} /></TableCell>
                                
                                <TableCell>
                                    <button onClick={()=>taskedit(data.task,data.description,data.date,data._id) }  style={{color:'blue',fontWeight:'700', backgroundColor:'white',borderColor:'white',outline:'none',marginRight:10,width:35}} >Edit</button> 
                                    <button onClick={()=>taskdelete(data._id) }  style={{color:'red',fontWeight:'700', backgroundColor:'white',borderColor:'white'}} >Delete</button> 
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
           </Table>
        </div>
    </div>
    </div>
  )
}

export default Landing