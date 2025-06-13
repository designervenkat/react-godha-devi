import { Outlet } from 'react-router'
export default function Admin() {
   const token = localStorage.getItem('token')

   console.log(token)

   return (
      <div className='flex items-center justify-start'>
         <div className='h-screen bg-slate-400 w-96 flex items-center justify-center'>
            <h2>Sidebar</h2>
         </div>
         <div className='flex-1 h-screen'>
            <Outlet />
         </div>
      </div>
   )
}
