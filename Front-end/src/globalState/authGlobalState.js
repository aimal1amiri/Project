import {create} from 'zustand'
import { axiosURL } from '../lib/Backnd-info-fetching.js'
import toast from 'react-hot-toast'

export const authGlobalState = create((set) => ({
    authUser:null,
    signingUp:false,
    loggingIn:false,
    changingProfile:false,
    authChecking:true,


    verifyAuth: async() => {
        try {
            
            const response = await axiosURL.get("/v1/auth/authCheck")
            //console.log("response: ",response)

            set({authUser:response.data})

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
            console.log(data)
            const response = await axiosURL.post('/v1/auth/signup',data)
            console.log("response: ",response)

            toast.success(data.response.data.message);
            set({authUser:response.data})

        } catch (error) {

            toast.error(error.response.data.message)
            
        }finally{
            set({signingUp:false})
        }

    }

    
}))