import React from 'react'
import SignupChatBubble from './SignupChatBubble'

const AnimationCube = () => {
  return (
    <div className=' items-center'>
      <div className="mockup-phone bg-white">
         <div className="camera bg-white"></div>
             <div className="display bg-white">
                 <div className="artboard artboard-demo phone-1">
                    <SignupChatBubble/>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default AnimationCube