import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import { authGlobalState } from './globalState/authGlobalState'
import {Loader} from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { themeGlobalState } from './globalState/themeGlobalState'
import ChatPage from './pages/ChatPage'

const App = () => {

  const {authUser, verifyAuth, authChecking}= authGlobalState();
  const { themeColor }=themeGlobalState();

  useEffect(()=>{
    verifyAuth()
    
  }, [verifyAuth]);

  console.log("authUser(App): ",authUser);

  


  if(authChecking && !authUser){
    return (
      <div className='flex items-center justify-center h-screen'>

        <Loader className='size-10 animate-spin ' />

      </div>


    )
  }




  return (
    
    <div data-theme={themeColor}>
      
      <Navbar />
      <Toaster/>
        <Routes>
          <Route path='/' element={authUser ? <ChatPage /> : <Navigate to="/login" /> } />
          <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to="/" />} />
          <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
          <Route path='/profile' element={authUser ? <Profile /> : <Navigate to="/login" />} />
          <Route path='/setting' element={authUser ? <Setting /> : <Navigate to="/login" /> } />

        </Routes>
      

    </div>
  )
}

export default App