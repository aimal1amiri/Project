import UserSchema from "../databaseSchema/userSchema.js";

export const sidebarUsers= async (req,res)=>{

    try {
        const loggedInUserId = req.user._id;
        const fillterUsers = await UserSchema.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(fillterUsers);
    } catch (error) {

        console.log("error in sidebarUserController:",error.message)

        res.status(500).json({success:false, message:"Server error"});
        
    }

}