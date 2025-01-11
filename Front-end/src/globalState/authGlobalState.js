import {create} from 'zustand'
import { axiosURL } from '../lib/Backnd-info-fetching.js'

export const authGlobalState = create((set) => ({
    authUser:null,
    signingUp:false,
    loggingIn:false,
    changingProfile:false,
    authChecking:true,


    verifyAuth: async() => {
        try {
            
            const response = await axiosURL.get("/v1/auth/authCheck")

            set({authUser:response.data})

        } catch (error) {
            set({authUser:null})
            console.log("error in authGlobalState. verifyAuth: ",error);
            
        } finally{
            set({authChecking:false});
        }
    }

    
}))