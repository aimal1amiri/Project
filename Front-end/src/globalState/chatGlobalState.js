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
            const response = axiosURL.get("/message/users")

            set({users:response.data});


        } catch (error) {
            toast.error(error.response.data.message);
            
        }finally{
            set({usersLoading:false});
        }
    },

    getMessages:async ()=>{
        set({messagesLoading:true})

        try {
            const response = axiosURL.get(`/message/${userId}`)
            set({messages:response.data})
            
        } catch (error) {
            toast.error(error.response.data.message)
            
        }finally{
            set({messagesLoading:false})
        }
    },

    setSelectedUser: (selectedUser)=> set({selectedUser}),

}))