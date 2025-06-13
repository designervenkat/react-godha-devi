import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
   About,
   Contact,
   Home,
   Products,
   Layout,
   ProductDetails,
   Dashboard,
} from './components'

import Admin from './components/Shared/Admin'
import PrivateRoutes from './components/PrivateRoutes'
import Login from './components/Login/Login'

import getAllProducts from './components/Products/Products'

import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router'

const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route
            path='/'
            element={<Layout />}>
            <Route
               path=''
               element={<Home />}
            />
            <Route
               path='about-us'
               element={<About />}
            />
            <Route
               loader={async () => {
                  const response = await fetch('https://dummyjson.com/products')
                  const data = await response.json()
                  return data.products
               }}
               path='products'
               element={<Products />}
            />
            <Route
               path='products/:id'
               element={<ProductDetails />}
            />
            <Route
               path='contact'
               element={<Contact />}
            />
         </Route>

         <Route element={<PrivateRoutes />}>
            <Route
               path='dashboard'
               element={<Dashboard />}
            />
         </Route>

         <Route
            path='login'
            element={<Login />}
         />
      </>
   )
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
)
