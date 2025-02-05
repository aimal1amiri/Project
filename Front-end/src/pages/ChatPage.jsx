
import React from 'react'
import Sidebar from '../components/Sidebar'
import { chatGlobalState } from '../globalState/chatGlobalState'
import NoChatWindow from '../components/NoChatWindow';
import UserChatWindow from '../components/UserChatWindow';

const ChatPage = () => {

  const {selectedUser}=chatGlobalState();
  return (
    <div className='h-screen bg-base-200'>
      <div className='flex items-center justify-center pt-20 px-4'>
        <div className='bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[cal(100vh-8rem)]'>
          <div className='flex h-full rounded-lg overflow-hidden'>
            <Sidebar />
            {!selectedUser ? <NoChatWindow/> : <UserChatWindow/>}

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ChatPage