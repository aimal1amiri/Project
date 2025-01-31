import React, { useState } from 'react'
import { authGlobalState } from '../globalState/authGlobalState';
import { Eye, EyeOff, Link2, LoaderCircle, Lock, Mail, MessageCircleMore } from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimationCube from '../components/AnimationCube';

const Login = () => {
  
  const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      
      email:"",
      password:""
    })
    
    const {login, loggingIn}=authGlobalState()

    const handleSubmit = async (e)=>{
      e.preventDefault();
      login(formData)
      

    }


  return (

    <div className='h-screen grid lg:grid-cols-2'>
      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex justify-center items-center group-hover:bg-primary/20 transition-colors'>
              {loggingIn ? (<LoaderCircle className='size-6 text-primary animate-spin' color="#ff7800"/>) : (<MessageCircleMore className='size-6 text-primary' color="#ff7800"/>) }
              </div>
              <h1 className='text-2xl font-bold mt-2'>Welcome</h1>
              <p className='text-base-content/60'>Sign in </p>
            </div>
          </div>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium' >Email</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-base-content/40' color="#ff7800"/>
                </div>

                <input className='input input-bordered w-full pl-10'
                type='email'
                placeholder='@example.com'
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                />

              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Password</span>
              </label>

              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='w-5 h-5 text-base-content/40' color="#ff7800"/>
                </div>

                <input className='input input-bordered w-full pl-10'
                type={showPassword ? "text": "password"}
                placeholder='********'
                value={formData.password}
                onChange={(e)=>setFormData({...formData, password: e.target.value})}

                />

                <button className='absolute inset-y-0 right-0 pr-3 flex items-center'
                type='button'
                onClick={()=>setShowPassword(!showPassword)}
                >
                  {showPassword ?(
                    <EyeOff className='h-5 w-5 text-base-content/40'/>
                  ):(
                    <Eye className='h-5 w-5 text-base-content/40'/>
                  )}
                </button>
              </div>
            </div>

            <button className="btn glass bg-amber-600 text-black btn-block hover:text-orange-500 " type='submit' disabled={loggingIn} >
            {loggingIn ?(
                <>
                <span className="loading loading-infinity loading-lg "></span>
                
                <p className='text-orange-500 animate-bounce'>Logining...</p>
                </>

              ):(
                "Login"
              ) }
            </button>
          </form>

          <div className=' flex'>
            <Link2 className='mr-20'></Link2>
            <p className='text-center text-base-content/60 '>
            Don't have an account? {" "}
            <Link to="/signup" className='link text-orange-500'>
            Sign Up
            </Link>            
            </p>
            <Link2 className='ml-24'></Link2>
          </div>
        </div>
      </div>
      <div className='h-screen bg-base-200 p-6 sm:p-12 it'>
        <AnimationCube className='items-center' />
      </div>
    </div>


    
  )
}

export default Login