import React from 'react'
import { authGlobalState } from '../globalState/authGlobalState'
import {Camera} from 'lucide-react'

const Profile = () => {

  const {authUser, changingProfile}= authGlobalState();

  const uploadingImage= async(e)=>{}


  return (
    <div className='h-screen pt-20 '>
      <div className='max-w-2xl mx-auto p-4 py-8'>
        <div className='bg-base-300 rounded-xl p-6 space-y-8'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>
              Profile
            </h1>
            <p className='mt-2'>
              Profile Information
            </p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <div className='relative'>
              <img src={authUser.profilePic}
              alt='Profile'
              className='size-32 rounded-full object-cover border-4'/>

              <label className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${changingProfile ? "animate-spin pointer-events-none" : ""}`}>
                <Camera className='w-5 h-5 text-base-200'/>

                <input type='file'
                id='profilePic-Uploading'
                className='hidden'
                accept='image/*'
                onChange={uploadingImage}
                disabled={changingProfile}
                />
              </label>
            </div>
            <p className='text-sm text-zinc-400'>
              {changingProfile ? "Changing Profile..." :"Click the camera icon to change your profile picture."}
            </p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Profile