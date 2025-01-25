import React from 'react'
import { authGlobalState } from '../globalState/authGlobalState';

const Login = () => {
  
  const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      
      email:"",
      password:""
    })

    const {login, loggingIn}=authGlobalState()


  return (

    <div className='h-screen grid lg:grid-cols-2'>
      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex justify-center items-center group-hover:bg-pr'></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  )
}

export default Login