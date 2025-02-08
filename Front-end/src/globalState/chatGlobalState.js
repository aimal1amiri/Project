import {create} from 'zustand'
import toast from 'react-hot-toast';
import { axiosURL } from '../lib/Backnd-info-fetching';


export const chatGlobalState = create((set) =>({
    messages:[],
    users:[],
    selectedUser:null,
    usersLoading:false,
    messagesLoading:false,


    getUser: async () =>{
        set({usersLoading:true})

        try {
            const response = await axiosURL.get("/v1/message/users")
            


            set({users:response.data.data});
            


        } catch (error) {
            toast.error(error.response.message);
            
        }finally{
            set({usersLoading:false});
        }
    },

    getMessages:async ()=>{
        set({messagesLoading:true})

        try {
            const response = await axiosURL.get(`/v1/message/${userId}`)
            set({messages:response.data})

            console.log(response)
            
        } catch (error) {
            toast.error(error.response.message)
            
        }finally{
            set({messagesLoading:false})
        }
    },

    setSelectedUser: (selectedUser)=> set({selectedUser}),

}))