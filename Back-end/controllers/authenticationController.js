import UserSchema from "../databaseSchema/userSchema.js"
import cloudinary from "../lib/profile-pic-cloudnary.js";
import { generateJWT } from "../lib/token.js"
import bcrypt from "bcryptjs"

export const login= async (req,res)=> {
    
    const {email,password}=req.body;
    
    try {

        const userEmail= await UserSchema.findOne({email})

        const userPass = await bcrypt.compare(password, userEmail.password);

        if(!userEmail || !userPass){
            return res.status(400).json({success:false, message:"Invalid Credientials"})
        }else{

            generateJWT(userEmail._id,res);

            return res.status(200).json({success:true,message:"login successfully", data:{

                _id:userEmail._id,
                fullName: userEmail.fullName,
                email:userEmail.email,
                profilePic:userEmail.profilePic

            }})

        }


        
    } catch (error) {

        console.log("login error: ", error.message)
        res.status(500).json({success:false, message:"Server Error"})
        
    }
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

        if(!fullName || !email || !password){
            return res.status(400).json({success:false, message:"Please fill the necessary inputs"});
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

    try {
        
        res.clearCookie("chatWebJWT")
        res.status(200).json({success:true, message:"Logout successfully"})

    } catch (error) {

        console.log("logout error: ",error.message)
        res.status(500).json({success:false, message:"Server Error"})
        
    }
}

export const profileUpdate = async (req,res) => {

    try {
        
        const {profilePic}=req.body;

        const userID = req.body.user._id

        if(!profilePic){
            return res.status(400).json({message:"Profile picture is required"});
        }

        const userPicUpload = await cloudinary.uploader.upload(profilePic)

        const updateDatabaseMDB= await UserSchema.findByIdAndUpdate(userID, {profilePic:userPicUpload.secure_url}, {new:true})


        res.status(200).json({success:true, message:"Profile picture is updated", data:{updateDatabaseMDB}})




    } catch (error) {

        res.status(500).json({success:false, message:"Server Error"});

        console.log(error.message);
        
    }
    
}

export const checkingAuth = async (req,res) => {

    try {
        
        res.status(200).json(req.user);

    } catch (error) {

        res.status(500).json({message:"Server Error"})
        
    }

}