import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function Dashboard() {
   const [token, setToken] = useState(localStorage.getItem('token'))

   const navigate = useNavigate()

   const handleLogout = () => {
      setToken(null)
      localStorage.removeItem('token')
   }

   useEffect(() => {
      if (!token) navigate('/login')
   }, [token])
   return (
      <section className='py-10 bg-gray-100 sm:py-16 lg:py-24 h-screen'>
         <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='max-w-2xl mx-auto text-center'>
               <h2 className='text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl'>
                  Dashboard
               </h2>
               <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500'>
                  This page is private access only
               </p>

               <button
                  type='button'
                  onClick={handleLogout}
                  className='px-8 py-2 bg-orange-200 text-orange-700 flex items-center justify-center cursor-pointer'>
                  Logout
               </button>
            </div>
         </div>
      </section>
   )
}
