import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv'
import productRoute from './routes/productRoute.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import cors from'cors'

const app=express();
dotenv.config()
connectDb()
const port=3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/product/',productRoute);
app.use('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.send("server is running");
})

app.listen(port,()=>console.log(`server is running in the ${port}`))