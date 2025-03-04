import {create} from 'zustand'
import { axiosURL } from '../lib/Backnd-info-fetching.js'
import toast from 'react-hot-toast'
import axios from 'axios'

export const authGlobalState = create((set) => ({
    authUser:null,
    signingUp:false,
    loggingIn:false,
    changingProfile:false,
    authChecking:true,
    onlineUsers:[],


    verifyAuth: async() => {
        try {
            
            const response = await axiosURL.get("/v1/auth/authCheck")
            //console.log("response: ",response)

            set({authUser:response?.data})

        } catch (error) {
            set({authUser:null})
            //console.log("error in authGlobalState. verifyAuth: ",error);
            
        } finally{
            set({authChecking:false});
        }
    },

    signup: async(data) => {
        
        set({signingUp:true})

        try {
            
            const response = await axiosURL.post('/v1/auth/signup',data)
            console.log("response: ",response)



            toast.success(response.data.message);
            set({authUser:response.data})

        } catch (error) {
            console.log("error: ",error)

            toast.error(error.response.data.message)
            
        }finally{
            set({signingUp:false})
        }

    },

    logout: async()=>{
        try {
            const response =await axiosURL.post("/v1/auth/logout");
            set({authUser:null});

            //console.log(response)

            toast.success(response.data.message)
        } catch (error) {

            toast.error(error.response.data.message)
            
        }
    },
    login:async(data)=>{
        set({loggingIn:true})

        try {
            
            const response= await axiosURL.post("/v1/auth/login",data)
            
            set({authUser:response?.data.data})
            
            

            toast.success(response.data.message)
        } catch (error) {

            toast.error(error.response.data.message)
            
        }finally{
            set({loggingIn:false})
        }
        
    },

    uploadImage:async(data)=>{

        set({changingProfile:true})
        console.log("data: ",data)

        try {
            const response= await axiosURL.put('/v1/auth/profileUpdate',data)
            console.log("response: ",response)
            set({authUser:response.data});
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            
        }finally{
            set({changingProfile:false})
        }

    }

    
}))