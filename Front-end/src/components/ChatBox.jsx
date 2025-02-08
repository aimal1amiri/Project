import React, { useEffect } from 'react'
import { chatGlobalState } from '../globalState/chatGlobalState'
import MessagesLoadingSkeleton from './loadingSkeletons/MessagesLoadingSkeleton';
import ChatHeader from './ChatHeader';

const ChatBox = () => {
    const {messages, getMessages, messagesLoading, selectedUser}=chatGlobalState();

    useEffect (()=> {
        getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages])

    if (messagesLoading) return <MessagesLoadingSkeleton />

   
  return (
    <div className='flex flex-1 flex-col overflow-auto'>
        <ChatHeader/>

        <p>dd</p>

    </div>
  )
}

export default ChatBox