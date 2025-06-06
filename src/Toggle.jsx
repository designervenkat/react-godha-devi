import { useState } from 'react'

export default function Toggle() {
   const [isDarkMode, setDarkMode] = useState(false)

   const toggleTheme = () => {
      setDarkMode(!isDarkMode)
   }

   console.log(isDarkMode)

   return (
      <div className='flex flex-col gap-y-2'>
         <h1 className={isDarkMode ? 'text-slate-50' : 'text-slate-500'}>
            React useState
         </h1>

         <button
            onClick={toggleTheme}
            className='w-34 bg-slate-900 text-slate-200 h-12 rounded-md'>
            Toggle to {isDarkMode ? 'light' : 'dark'} mode
         </button>
      </div>
   )
}
