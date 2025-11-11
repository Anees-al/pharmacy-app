import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv'


const app=express();
dotenv.config()
connectDb()
const port=3000;


app.get('/',(req,res)=>{
    res.send("server is running");
})

app.listen(port,()=>console.log(`server is running in the ${port}`))