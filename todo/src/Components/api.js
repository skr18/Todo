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
export const addtask = async(title,des,name,date)=>{
    try{
        return await axios.post(`${url}/task`,[title,des,name,date])
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
export const deltask = async(id)=>{
    try{
        return await axios.post(`${url}/delete`,[id])
    }catch(e){
        console.log("error while deleteing the users task ",e)
    }
}
export const edittask = async(id)=>{
    try{
        return await axios.post(`${url}/edit`,[id])
    }catch(e){
        console.log("error while editing the users task ",e)
    }
}