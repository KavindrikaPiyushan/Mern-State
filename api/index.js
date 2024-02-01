import express from 'express';
import mongoose from 'mongoose';
import dotenv, { config } from "dotenv";
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then((x)=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log("ERROR...DB is not connected",err);
});

const app=express();

app.listen(8000,()=>{
    console.log('server is running on port 8000!');
});

app.use("/api/user",userRouter);

