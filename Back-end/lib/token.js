import jwt from "jsonwebtoken"


export const generateJWT= (userID, res)=>{

    const token = jwt.sign({userID}, process.env.JWT_KEY, {
        expiresIn:"1d"
    })

    res.cookie("chatWebJWT", token, {
        maxAge:1*24*60*60*1000,
        httpOnly: true, //prevent XSS attacks
        sameSite: "strict", //prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development" //this only be true if we are in production stage
    });


    return token;


}