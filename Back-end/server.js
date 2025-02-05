import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authenticateRoutes from "./routes/authenticateRoutes.js"

import { databaseConnect } from "./lib/database.js";
import messageRoutes from "./routes/messageRoutes.js"

import cors from 'cors';


const chatWeb=express();

dotenv.config()

const port = process.env.PORT

//this line is used to get the data that is being sent through json from frontend. (parse incoming JSON payloads from HTTP requests) 
chatWeb.use(express.json());
chatWeb.use(cookieParser());
chatWeb.use(cors({
    origin:"http://localhost:5173",
    credentials:true

}))
/*
/ the reason we add that cors is when i am communicating from front end to the backend , 
they are in different ports. 
backend:2000. 
frontend:5173. 
so to able to exchange information between them we added cors.
*/

chatWeb.use("/v1/auth", authenticateRoutes);
chatWeb.use("/v1/message",messageRoutes);

chatWeb.listen(port, ()=>{
    console.log("server is running on port: ", port);
    databaseConnect()
})

