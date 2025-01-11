import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import { authGlobalState } from './globalState/authGlobalState'

const App = () => {

  const {verifyAuth, authChecking}= authGlobalState();

  useEffect(()=>{
    verifyAuth()
    
  }, [verifyAuth]);

  console.log("authChecking: ",authChecking);



  return (
    
    <div>
      
      <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />

        </Routes>
      

    </div>
  )
}

export default App