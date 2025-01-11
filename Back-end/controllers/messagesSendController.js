import MessageSchema from "../databaseSchema/messageSchema.js";

export const messageSend = async (req , res)=>{
    try {
        
        const {text, image}= req.body;
        const {id:receverId}=req.params;

        const logedInUserId=req.user._id;

        let imageUrl

        if(image){

            //uploading the images to the cloudnary if user sends the images
            const uploadingImage = await cloudinary.uploader.upload(image);
            imageUrl= uploadingImage.secure_url;

        }

        const newMessage = new MessageSchema({
            logedInUserId,
            receverId,
            text,
            image:imageUrl

        })

        await newMessage.save();

        res.status(200).json(newMessage);

    } catch (error) {

        console.log("error in messages send controller: ",error.message)

        res.status(500).json({success:false, message:"Server error"})
        
    }
}