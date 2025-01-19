import React, { useState } from 'react'
import { authGlobalState } from '../globalState/authGlobalState';
import {Eye, EyeOff, Link2, Lock, Mail, MessageSquare, User} from 'lucide-react'
import {Link} from 'react-router-dom'
import SignupChatBubble from '../components/SignupChatBubble';
import toast from 'react-hot-toast'



const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName:"",
    email:"",
    password:""
  })

  //  console.log(showPassword)

  const {signup, signingUp}= authGlobalState();

  

  

  const validateInputs = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required");
      
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Email is invalid");
      return false;
    }
    if (!formData.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }
    return true; 
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    const isValid= validateInputs();

    if(isValid){
      signup(formData);
      
    };
  }

  
 
  return (
    <div className='min-h-screen grid lg:grid-cols-2 '>
      

      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 translation-colors'>
              <MessageSquare className='size-6 text-primary' color="#ff7800"/>
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create an <span className='text-amber-600'>Account</span></h1>
              <p className='text-base-content/60'>Creating an account is free. Enjoy it!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Full Name</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>

                  <User className='size-5 text-base-content/40' color="#ff7800">
                  </User>

                </div>
                <input type='text' className={`input input-bordered w-full pl-10`} placeholder='Amiri' value={formData.fullName} onChange={(e)=> setFormData({...formData, fullName:e.target.value})} />
              </div>
            </div>
            
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Email</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='size-5 text-base-content/40' color="#ff7800"/>
                </div>
                <input type='email' className={"input input-bordered w-full pl-10"} placeholder='@example.com' value={formData.email} onChange={(e)=> setFormData({...formData, email:e.target.value})} />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>
                  Password
                </span>

              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='size-5 text-base-content/40' color="#ff7800"/>
                </div>

                <input type={showPassword ? "text" : "password"} className='input input-bordered w-full pl-10' placeholder='********' value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} />

                <button type='button' className='absolute inset-y-0 right-0 pr-3 flex items-center' onClick={()=> setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className='size-5 text-base-content/40' />
                  ) : (<Eye className='size-5 text-base-content/40' />)}
                </button>
              </div>
            </div>

            
            <button className="btn glass bg-amber-600 text-black btn-block hover:text-orange-500 " type='submit' disabled={signingUp} >
            {signingUp ?(
                <>
                <span className="loading loading-infinity loading-lg"></span>
                
                <p className='text-orange-500'>Creating...</p>
                </>

              ):(
                "Create Account"
              ) }
            </button>
            
          </form>

          <div className=' flex'>
            <Link2 className='mr-20'></Link2>
            <p className='text-center text-base-content/60 '>
            Already have an account? {" "}
            <Link to="/login" className='link text-orange-500'>
            Login
            </Link>            
            </p>
            <Link2 className='ml-24'></Link2>
          </div>
        </div>
      </div>

      <div className='h-screen bg-base-200 p-6 sm:p-12'>

      <SignupChatBubble className='justify-center'/>
      </div>

      


    </div>
   
  )
}

export default Signup