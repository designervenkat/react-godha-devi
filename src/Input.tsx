import { useState } from 'react'

export default function Input() {
   const [name, setName] = useState('React')

   return (
      <div className='flex flex-col text-slate-100'>
         <h1>Hello, {name}</h1>
         <input
            className='h-12 w-72 border border-slate-200'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
      </div>
   )
}
