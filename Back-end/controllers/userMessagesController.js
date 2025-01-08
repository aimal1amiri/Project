import MessageSchema from "../databaseSchema/messageSchema.js"

export const userMessages = async (req,res)=>{

    try {

        const {id:userChatId}=req.params
        

        const loggedInUserId = req.user._id
        console.log(loggedInUserId)

        const messages = await MessageSchema.find({
            $or:[
                {senderId:loggedInUserId, receviedId:userChatId},
                {senderId:userChatId, receviedId:loggedInUserId}

            ],
        })

        res.status(200).json(messages)
    } catch (error) {

        console.log("user Messages controller:",error.messages)

        res.status(500).json({success:false, message:"Server error"})
        
    }
}