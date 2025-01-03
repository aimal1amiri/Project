import mongoose from "mongoose";
import dotenv from "dotenv"

export const databaseConnect= async () => {

    dotenv.config()

    try {
        const connection = await mongoose.connect(process.env.DATABASE_URI)
        console.log("database connection: ", connection.connection.host);
    } catch (error) {

        console.log("Database problem: " , error);
        
    }
}