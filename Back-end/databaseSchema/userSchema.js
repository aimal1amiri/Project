import mongoose  from "mongoose";

const user= new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },

        fullName:{
            type:String,
            required:true,

        },

        password:{
            type:String,
            required:true,
            minLength: 8,
        },

        profilePic:{
            type:String,
            default:""
        },
    },
    {timestamps:true}
);

const UserSchema= mongoose.model("UserSchema",user);

export default UserSchema;