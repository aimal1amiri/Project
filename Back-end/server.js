import express from "express"
import dotenv from "dotenv"

import authenticateRoutes from "./routes/authenticateRoutes.js"
import { databaseConnect } from "./lib/database.js";


const chatWeb=express();

dotenv.config()

const port = process.env.PORT

chatWeb.use("/v1/auth", authenticateRoutes);

chatWeb.listen(port, ()=>{
    console.log("server is running on port: ", port);
    databaseConnect()
})

