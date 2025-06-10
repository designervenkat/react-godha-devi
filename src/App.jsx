import { useCallback, useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function App() {
   const [length, setLength] = useState(8)
   const [character, setCharacter] = useState(false)
   const [numbers, setNumbers] = useState(false)
   const [password, setPassword] = useState('')

   // useRef Hook
   const passwordEl = useRef(null)

   // function to generate password
   const passwordGenerator = useCallback(() => {
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numbers) str += '0123456789'
      if (character) str += '!@#$%^&*~'

      for (let i = 1; i <= length; i++) {
         let char = Math.floor(Math.random() * str.length + 1)
         pass += str.charAt(char)
      }

      setPassword(pass)
   }, [length, numbers, character, setPassword])

   // copy function
   const copyToClipboard = useCallback(() => {
      passwordEl.current?.select()
      passwordEl.current?.setSelectionRange(0, 15)
      window.navigator.clipboard.writeText(password)
      toast.error('Copied to Clipboard', {
         icon: '🎉',
         position: 'bottom-right',
      })
   }, [password])

   useEffect(() => {
      passwordGenerator()
   }, [length, numbers, character, setPassword])

   return (
      <section className='py-10 bg-slate-900 sm:py-16 lg:py-24 h-screen'>
         <Toaster />
         <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='max-w-2xl mx-auto text-center'>
               <h2 className='text-base font-bold leading-tight text-slate-400'>
                  Password Generator
               </h2>
            </div>
            <div className='relative max-w-lg mx-auto mt-8 md:mt-16'>
               <div className='overflow-hidden bg-slate-800 rounded-md shadow-md'>
                  <div className='px-4 py-6 sm:px-8 sm:py-7'>
                     <div className='space-y-5'>
                        <div>
                           <label
                              htmlFor=''
                              className='text-base font-medium text-gray-400'>
                              Password
                           </label>
                           <div className='flex mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                              <input
                                 type='text'
                                 value={password}
                                 ref={passwordEl}
                                 disabled
                                 className='block w-full py-4 pl-10 pr-4 text-white placeholder-gray-500 transition-all duration-200 bg-slate-500   focus:outline-none'
                              />
                              <button
                                 className='outline-none bg-slate-700 text-white px-3 py-0.5 shrink-0 text-sm cursor-pointer'
                                 onClick={copyToClipboard}>
                                 Copy
                              </button>
                           </div>

                           <div className='flex text-sm gap-x-4 mt-4'>
                              <div className='flex items-center gap-x-1'>
                                 <input
                                    type='range'
                                    min={6}
                                    max={12}
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                    className='cursor-pointer bg-white'
                                 />
                                 <label className='text-white text-sm'>
                                    Length: {length}
                                 </label>
                              </div>
                              <div className='flex items-center gap-x-1'>
                                 <input
                                    type='checkbox'
                                    id='numberInput'
                                    value={numbers}
                                    onChange={() => setNumbers((prev) => !prev)}
                                 />
                                 <label
                                    htmlFor='numberInput'
                                    className='text-white text-sm'>
                                    Numbers
                                 </label>
                              </div>
                              <div className='flex items-center gap-x-1'>
                                 <input
                                    type='checkbox'
                                    id='characterInput'
                                    value={character}
                                    onChange={() =>
                                       setCharacter((prev) => !prev)
                                    }
                                 />
                                 <label
                                    htmlFor='characterInput'
                                    className='text-white text-sm'>
                                    Characters
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default App
