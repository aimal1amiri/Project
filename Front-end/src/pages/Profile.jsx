import React from 'react'
import { authGlobalState } from '../globalState/authGlobalState'
import {Camera, Mail, User} from 'lucide-react'

const Profile = () => {

  const {authUser, changingProfile, uploadImage}= authGlobalState();

  const uploadingImage= async(e)=>{
    const imageFile=e.target.files[0]

    if(!imageFile) return;

    const imageFileReader= new FileReader();

    imageFileReader.readAsDataURL(imageFile);

   imageFileReader.onload = async()=>{
    const image = imageFileReader.result;
    await uploadImage({profilePic: image})
    }
  }


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
              <img src={authUser?.profilePic}
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

          <div className='space-y-6'>
            <div className='space-y-1.5'>
              <div className='text-sm text-zinc-400 flex items-center gap-2'>
                <User className='w-4 h-4'/>
                Full Name
              </div>

              <p className='px-4 py-2.5 bg-base-200 rounded-lg border font-bold'>
                {authUser?.fullName}
              </p>
            </div>

            <div className='space-y-1.5'>
              <div className='text-sm text-zinc-400 flex items-center gap-2 '>
                <Mail className='w-4 h-4'/>
                Email 
              </div>

              <p className='px-4 py-2.5 bg-base-200 rounded-lg border font-bold'>{authUser?.email}</p>
            </div>
          </div>

          <div className='mt-6 bg-base-300 rounded-xl p-6'>
            <h2 className='text-lg font-medium mb-4'>
              Account Information
            </h2>

            <div className='space-y-3 text-sm'>
              <div className='flex items-center justify-between py-2 border-b border-zinc-700 font-bold'>
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className='flex items-center justify-between py-2'>
                <span>Account Status</span>
                <span className='text-green-500 font-bold'>Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Profile