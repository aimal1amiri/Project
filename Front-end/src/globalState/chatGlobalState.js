import {create} from 'zustand'
import toast from 'react-hot-toast';
import { axiosURL } from '../lib/Backnd-info-fetching';


export const chatGlobalState = create((set,get) =>({
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

    getMessages:async (userId)=>{
        set({messagesLoading:true})

        try {
            const response = await axiosURL.get(`/v1/message/${userId}`)
            set({messages:response.data})

            console.log(response)
            
        } catch (error) {
            console.log("get meesages: ",error)
            toast.error(error.response.message)
            
        }finally{
            set({messagesLoading:false})
        }
    },

    sendMessages: async (data)=>{
        const {selectedUser,messages}=get();

        try {
            const response = await axiosURL.post(`/v1/message/send/${selectedUser._id}`, data);
            set({messages:[...messages, response.data]})
        } catch (error) {
            toast.error(error.response.data.message)
            
        }
    },

    setSelectedUser: (selectedUser)=> set({selectedUser}),

}))