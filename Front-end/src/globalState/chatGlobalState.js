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
            const response = axiosURL.get("/v1/message/users")
            console.log("resp: ", response)


            set({users:response.data});
            console.log(users)


        } catch (error) {
            toast.error(error.response);
            
        }finally{
            set({usersLoading:false});
        }
    },

    getMessages:async ()=>{
        set({messagesLoading:true})

        try {
            const response = axiosURL.get(`/v1/message/${userId}`)
            set({messages:response.data})
            
        } catch (error) {
            toast.error(error.response.data.message)
            
        }finally{
            set({messagesLoading:false})
        }
    },

    setSelectedUser: (selectedUser)=> set({selectedUser}),

}))