import {v2 as cloudinary} from "cloudinary"
import {config} from "dotenv"

config()

cloudinary.config({
    cloud_name:process.env.PROFILE_PICTURE_CLOUDNARY_NAME,
    api_key:process.env.CLOUDNARY_API_KEY,
    api_secret:process.env.CLOUDNARY_API_SECRET,
});

export default cloudinary;