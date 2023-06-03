const dotenv = require('dotenv')
const cors = require('cors')
const express = require("express")
const path = require('path')
const app = express()
const fs = require('fs');
const { default: mongoose } = require("mongoose");
const moongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { stringify } = require('querystring');

dotenv.config()

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{
    console.log("server is running")
})

const uname = process.env.Db_Username
const pass = process.env.Db_Password

const db_link = `mongodb+srv://${uname}:${pass}@cluster0.abssiju.mongodb.net/`
mongoose.connect(db_link).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    }
})

const taskSchema = mongoose.Schema({
    name:{
        type:String,
    },
    task:{
        type:String,
    },
    description:{
        type:String,
    },
    date:{
        type:String,
    },
    status:{
        type:String,
    }
})

const mod =  mongoose.model('mod',userSchema);
const mod2 =  mongoose.model('mod2',taskSchema);

const users = [];


// app.get('/',async(req,res)=>{
//     const {token} = await req.cookies
//     if(token){
//         res.sendFile('home2.html',{root:__dirname})
//         // res.render("home2",{name:token})
//         // res.redirect('home2')
//     }else{
//         res.sendFile('home.html',{root:__dirname})
//     }
// })



// app.get('/logout',(req,res)=>{
//     res.cookie("token",null,{
//         httpOnly:true,
//         expires:new Date(Date.now())
//     })
//     res.redirect('/');
// })

// app.get('/login',(req,res)=>{  
//     res.sendFile('login.html',{root:__dirname})
// })

// app.post('/login',(req,res)=>{  
//     res.sendFile('login.html',{root:__dirname})
// })

// app.get('/username',async(req,res)=>{
//     let {token} = await req.cookies
//     // console.log(token)
//     res.json({
//         token
//     })
// })

// ******
app.post('/edit',async(req,res)=>{
    // let {x} = await req.cookies
    // console.log(x)
    let data = req.body
    // console.log(data)
    let ob = await mod2.find({_id:data})  
    console.log(ob)
    console.log(ob[0].status)
    if(ob[0].status){
        console.log("uncheck")
        mod2.updateOne({
            _id:data
        }, {status:""} ).then(()=>{
            console.log('successfully unchecked the data in mongo db')
            res.status(200).send(true)
        })
    }else{
        console.log("check")
        mod2.updateOne({
            _id:data
        }, {status:"checked"} ).then(()=>{
            console.log('successfully checked the data in mongo db')
            res.status(200).send(true)
        })
    }
    
})

app.post('/task',async(req,res)=>{
    // let {x} = await req.cookies
    // console.log(x)
    let data = req.body
    let ob = await mod2.find({task:data[0]})
    // console.log(ob)
    if(ob.length>=1){
        mod2.updateOne({task:data[0]
        }, {task:data[0],date:data[3],description:data[1]}).then(()=>{
                     console.log('successfully edited the data in mongo db')
                     res.status(200).send(true)
        })
    }
    else{
        mod2.create({
            name:data[2],
            task:data[0],
            description:data[1],
            date:data[3],
            status:""
        }).then(()=>{
            console.log('success data mongo db')
            res.status(200).send(true)
        })
    }
})

app.post('/showtask',async(req,res)=>{
    let x = req.body
    // console.log("sadasd = ",x)
    let data = await mod2.find({name:x})
    // console.log(data)

    res.status(200).json(data)
})

app.post('/delete',async(req,res)=>{

    let id = await req.body
    console.log(id)
    mod2.deleteOne({"_id":id}).then(()=>{
        console.log("deleted")
        res.status(200).send(true)
    })
})



app.post('/add',(req,res)=>{
    // const name = req.body.name
    // res.cookie("token",name,{
    //     httpOnly:true,
    //     expires:new Date(Date.now()+60*10000)
    // })
    let data = req.body
    console.log(data)

    // users.push({
    //     name:req.body.name,
    //     email:req.body.email
    // })
    const name = data[0];
    res.cookie("token",name,{
        httpOnly:true,
        expires:new Date(Date.now()+10000*60*30)
    })

    mod.create({
        name:data[0],
        email:data[1],
        password:data[2]
    }).then(()=>{
        // res.status(200)
    })
})


app.post('/val',async(req,res)=>{
    let data = req.body
    // console.log(data[0])
    // console.log(data[1])
    let user = await mod.findOne({email:data[0]})
    if(!user){
        console.log("Invalid user name")
        res.send(false)
        // res.sendFile('sign.html',{root:__dirname})
    }
    else if(user.email == data[0]){
        if(user.password == data[1]){
            console.log("name = ",user.name)
            const name = user.name;
            res.cookie("token",name,{
                httpOnly:true,
                expires:new Date(Date.now()+10000*60*30)
            })
            console.log("Login sucess")
            res.send([true,name])
        }else{
            res.send(false)
            console.log("auth fail")
        }
    }
})

// app.get('/users',async(req,res)=>{
//     let data =await mod.find({})
//     res.json({
//         data
//     })
// })

// app.get('/success',(req,res)=>{
//     res.sendFile('success.html',{root:__dirname})
// })
// app.post('/sign',(req,res)=>{  
//     res.sendFile('sign.html',{root:__dirname})
// })
// app.get('/pro',async(req,res)=>{
//     const {token} = await req.cookies
//     if(token){
//         res.sendFile('profile2.html',{root:__dirname})
//     }else{
//         res.sendFile('profile.html',{root:__dirname})
//     }
// })

// app.get('/api',(req,res)=>{
//     res.end(`<h1>Your percentage is ${gen()}%</h1>`)
// })

