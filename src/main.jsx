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
} from './components'

import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router'

// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <Layout />,
//       children: [
//          {
//             path: '',
//             element: <Home />,
//          },
//          {
//             path: 'about-us',
//             element: <About />,
//          },
//          {
//             path: 'contact',
//             element: <Contact />,
//          },
//       ],
//    },
// ])

const router = createBrowserRouter(
   createRoutesFromElements(
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
   )
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
)
