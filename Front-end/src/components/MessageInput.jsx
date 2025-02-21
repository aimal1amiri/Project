import React, { useRef, useState } from 'react'
import { chatGlobalState } from '../globalState/chatGlobalState';
import { Image, Send, X } from 'lucide-react';


const MessageInput = () => {

  const [text,setText]=useState("");
  const [imagePreview,setImagePreview]=useState(null);
  const fileInputRef = useRef(null);
  const {sendMessages}=chatGlobalState()

  const handleImageChange= (e)=>{
    const file = e.target.files[0]
    if(!file.type.startsWith("image/")){
      toast.error("please select an image file");
      return
    }

    const reader = FileReader();
    reader.onloadend = ()=>{
      setImagePreview(reader.result);
    }
    reader.readAsDataURL(file);
  }

  const removeImage= ()=>{
    setImagePreview(null);

    if(fileInputRef.current) fileInputRef.current.value=""
  } 

  const handleSendMessage= async (e)=>{
    e.preventDefault();

    if(!text.trim() && !imagePreview) return;

    try {
      await sendMessages({
        text:text.trim(),
        image:imagePreview
      })

      setText("");
      setImagePreview(null)
      if(fileInputRef.current) fileInputRef.current.value=""
    } catch (error) {

      console.log("Faild to send message: ", error);
      
    }
  }


  return (
    <div className='p-4 w-full'>
      {imagePreview && (
        <div className='mb-3 flex items-center gap-2'>
          <div className='relative'>
            <img className='w-20 h-20 object-cover rounded-lg border border-zinc-700'
            src={imagePreview}
            alt='Preview'
            />
            <button className='absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center' 
            onClick={removeImage}
            type='button'
            >
              <X className="size-3"/>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className='flex items-center gap-2'>
        <div className='flex flex-1 gap-2'>
          <input className='w-full input input-bordered rounded-lg input-sm sm:input-md'
          onChange={(e)=>setText(e.target.value)}
          placeholder='Type a message'
          value={text}
          />

          <input className='hidden'
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleImageChange}
          />
          <button className={`hidden sm:flex btn btn-circle ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
          type='button'
          onClick={()=>fileInputRef.current?.click()}
          >
            <Image className='size-5'/>
          </button>
        </div>

        <button className='btn btn-sm btn-circle'
        type='submit'
        disabled={!text.trim() && !imagePreview}
        >
          <Send className='size-6 '/>
        </button>
      </form>
    </div>
  )
}

export default MessageInput