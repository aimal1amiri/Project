import React from 'react'
import { themeGlobalState } from '../globalState/themeGlobalState'
import {THEMES} from '../themes/index-colors'



const Setting = () => {

  const { themeColor, setThemeColor }=themeGlobalState

  console.log(themeColor)

  return (
    <div className='h-screen container mx-auto px-4 pt-20 max-w-5xl'>
      <div className='space-y-6'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-semibold'>
            Theme
          </h2>
          <p className='text-sm text-base-content/70'>
          Choose a theme for interface
          </p>
        </div>

        <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2'>
          {THEMES.map((n)=>{

            <button key={n} className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${themeColor===n ? "bg-base-200" : "hover:bg-base-200/50"}`}
            onClick={()=>setThemeColor(n)}
            >
              <div className='relative h-8 w-full rounded-md overflow-hidden' data-theme={n}>
                <div className='absolute inset-0 grid grid-cols-4 gap-px p-1'>
                  <div className='rounded bg-primary'></div>
                  <div className='rounded bg-secondary'></div>
                  <div className='rounded bg-accent'></div>
                  <div className='rounded bg-neutral'></div>
                </div>
              </div>
              <span className='text-[11px] font-medium truncate w-full text-center'>
                {n.charAt(0).toUpperCase()+ n.slice(1)}
              </span>
            </button>

          })}
        </div>
      </div>
    </div>
  )
}

export default Setting