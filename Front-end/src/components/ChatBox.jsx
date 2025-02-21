import React, { useEffect } from 'react'
import { chatGlobalState } from '../globalState/chatGlobalState'
import MessagesLoadingSkeleton from './loadingSkeletons/MessagesLoadingSkeleton';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';

const ChatBox = () => {
    const {messages, getMessages, messagesLoading, selectedUser}=chatGlobalState();

    useEffect (()=> {
        getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages])

    if (messagesLoading) return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatBox />
      <MessagesLoadingSkeleton/>
      <MessageInput/>
    </div>
    )

   
  return (
    <div className='flex flex-1 flex-col overflow-auto'>
        <ChatHeader/>

        <p></p>

        <MessageInput/> 

    </div>
  )
}

export default ChatBox