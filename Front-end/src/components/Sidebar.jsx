import React, { useEffect } from 'react'
import { chatGlobalState } from '../globalState/chatGlobalState'
import SidebarLoadingSkeleton from './loadingSkeletons/SidebarLoadingSkeleton';
import { Users } from 'lucide-react';

const Sidebar = () => {

  const {getUser, users, selectedUser, setSelectedUser, usersLoading}=chatGlobalState();

  useEffect(()=>{
    getUser()
  },[getUser])

  if(usersLoading) return <SidebarLoadingSkeleton/>

  return (
    <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>
      <div className='border-b border-base-300 w-full p-5'>
        <div className='flex items-center gap-2'>
          <Users className='size-6'/>
          <span className='font-medium hidden lg:block'>
            Contacts
          </span>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar