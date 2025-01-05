import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authenticateRoutes from "./routes/authenticateRoutes.js"
import { databaseConnect } from "./lib/database.js";


const chatWeb=express();

dotenv.config()

const port = process.env.PORT

//this line is used to get the data that is being sent through json from frontend. (parse incoming JSON payloads from HTTP requests) 
chatWeb.use(express.json());
chatWeb.use(cookieParser());

chatWeb.use("/v1/auth", authenticateRoutes);

chatWeb.listen(port, ()=>{
    console.log("server is running on port: ", port);
    databaseConnect()
})

