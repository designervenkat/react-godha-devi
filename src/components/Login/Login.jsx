import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()

   const handleLogin = () => {
      if (email === 'godha' && password === '1234') {
         localStorage.setItem('token', 1234)
         navigate('/dashboard')
      } else {
         alert('Invalid credentials')
      }
   }
   return (
      <div className='flex items-center justify-center w-full h-screen bg-gray-100 p-20'>
         <div className='h-100 w-100 bg-white p-8 rounded-2xl shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <div className='flex flex-col gap-4'>
               <input
                  type='email'
                  placeholder='Email'
                  className='border p-3 rounded-md'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type='password'
                  placeholder='Password'
                  className='border p-3 rounded-md'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  className='bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700'
                  onClick={handleLogin}>
                  Log In
               </button>
            </div>
         </div>
      </div>
   )
}
