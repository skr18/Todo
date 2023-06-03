import React from 'react'
import axios from 'axios'
const url ='http://localhost:8000'

export const checkuser = async(email,pass)=>{
    try{
        return await axios.post(`${url}/val`,[email,pass])
    }catch(e){
        console.log("error while logging in ",e)
    }
}
export const adduser = async(name,email,pass)=>{
    try{
        document.cookie = `name =${name}`
        return await axios.post(`${url}/add`,[name,email,pass])
    }catch(e){
        console.log("error while adding the user ",e)
    }
}
export const addtask = async(title,des,name)=>{
    try{
        await axios.post(`${url}/task`,[title,des,name])
    }catch(e){
        console.log("error while adding the users task ",e)
    }
}
export const showtask = async(name)=>{
    try{
        return await axios.post(`${url}/showtask`,[name])
    }catch(e){
        console.log("error while displaying the users task ",e)
    }
}