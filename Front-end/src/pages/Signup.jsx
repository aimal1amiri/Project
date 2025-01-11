import React, { useState } from 'react'
import { authGlobalState } from '../globalState/authGlobalState';

const Signup = () => {

  const [showPassword, setShowPassword] = useState();
  const [formData, setFormData] = useState({
    fullName:"",
    email:"",
    password:""
  })

  const {signup, signingUp}= authGlobalState();

  const validateInputs = () =>{}
 
  return (
    <div></div>
  )
}

export default Signup