import { Navigate, Outlet } from 'react-router'

export default function PrivateRoutes() {
   let auth = localStorage.getItem('token')

   return auth ? <Outlet /> : <Navigate to='/login' />
}
