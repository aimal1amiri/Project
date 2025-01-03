import UserSchema from "../databaseSchema/userSchema.js"
import { generateJWT } from "../lib/token.js"
import bcrypt from "bcryptjs"

export const login= (req,res)=> {
    res.send("login")
}

export const signup = async (req,res)=> {

    const {fullName, email, password}= req.body
    
    try {

        const passwordLength= password.length < 7 ? true : false ;

        if(passwordLength){
            return res.status(400).json({success:false, message:"Please ensure that password is at least 8 characters."})
        }

        const emailExist= await UserSchema.findOne({email})

        if (emailExist){
            return res.status(400).json({success:false, message:"Email is already existed"});

        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if(!passwordLength && !emailExist){
            
            const newUser = new UserSchema({
                fullName,
                email,
                password:hashedPassword
            })

            if(newUser){

                generateJWT(newUser._id, res);

                await newUser.save();

                res.status(201).json({
                    success:true,
                    message:"The account is created successfully.",
                    data:{
                        _id:newUser._id,
                        fullName:newUser.fullName,
                        email:newUser.email,
                        profilePic:newUser.profilePic,
                    }
                 })

            }else{
                res.status(400).json({message:"Invalid user data"})
            }
        }






    } catch (error) {

        console.log("Error in sigup controller: ", error.message)
        res.status(500).json({success:false, message:"Server Error"})
        
    }

}

export const logout = (req,res)=> {
    res.send("logout")
}