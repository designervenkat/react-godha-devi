import { useState } from 'react'
import Toggle from './Toggle'
import Input from './Input'

function App() {
   const [count, setCount] = useState(5)

   //    const addValue = () => {
   //       setCount(count + 1)
   //       console.log(count)
   //    }
   //    const removeValue = () => {
   //       setCount(count - 1)
   //       console.log(count)
   //    }

   //    console.log(count)

   return (
      <div className='bg-slate-800 h-screen w-screen grid place-content-center'>
         <div className='flex items-center justify-center gap-x-2'>
            <h1 className='text-base font-medium text-slate-400'>
               Counter Application
            </h1>
            <img
               src='/react.svg'
               alt=''
               width={20}
               height={20}
            />
         </div>
         <div className='flex flex-col gap-y-3 items-center justify-center'>
            {/* <p className='text-slate-200'> Count {count}</p>

            <button
               className='w-34 bg-slate-600 text-slate-200 h-12 rounded-md'
               onClick={() => setCount(count + 1)}>
               Increament - {count}
            </button>

            <button
               className='w-34 bg-slate-900 text-slate-200 h-12 rounded-md'
               onClick={() => setCount(count - 1)}>
               Decreament - {count}
            </button> */}

            <Toggle />
            <Input />
         </div>
      </div>
   )
}

export default App
