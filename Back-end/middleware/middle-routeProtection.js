import jwt from "jsonwebtoken"
import UserSchema from "../databaseSchema/userSchema.js"

export const routeProtection = async (req,res,next) =>{

    try {
        
        const assignToken = req.cookies.chatWebJWT

        if(!assignToken){
            return res.status(401).json({message:"Unauthorized"})
        }

        //we decoding the token to verify
        const tokenDecode = chatWebJWT.verify(assignToken, process.env.JWT_KEY)

        if(!tokenDecode){
            return res.status(401).json({success:false, message:"Unauthorized"})
        }

        const userVerify = await UserSchema.findById(tokenDecode.userID).select("-password")

        if(!userVerify){
            return res.status(401).json({success:false, message:"User is not found"})


        }

        req.userVerify = user

        next()


    } catch (error) {

        console.log("middle route protection error: ",error.message)
        res.status(500).json({success:false, message:"Server error"})
        
    }

}