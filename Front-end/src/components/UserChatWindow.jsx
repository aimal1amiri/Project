import React, { useEffect } from 'react'
import { chatGlobalState } from '../globalState/chatGlobalState'
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessagesLoadingSkeleton from './loadingSkeletons/MessagesLoadingSkeleton';


const UserChatWindow = () => {
    const {messages, getMessages, messagesLoading, selectedUser}=chatGlobalState();

    useEffect (()=> {
        getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages])

    if (messagesLoading){
       return (
        <div className='flex flex-1 flex-col overflow-auto'>
          <ChatHeader/>
          <MessagesLoadingSkeleton />
          <MessageInput/>
          </div>
        )
      }

   
  return (
    <div className='flex flex-1 flex-col overflow-auto'>
        <ChatHeader/>

        <p>dd</p>

        <MessageInput />

    </div>
  )
}

export default UserChatWindow