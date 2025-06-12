import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import Loader from '../Loader/Loader'

export default function ProductDetails() {
   let { id } = useParams()
   let navigate = useNavigate()

   const [product, setProduct] = useState(null)

   useEffect(() => {
      async function getProduct() {
         const response = await fetch(`https://dummyjson.com/products/${id}`)
         const data = await response.json()
         setProduct(data)
      }

      getProduct()
   }, [])

   if (!product)
      return (
         <section className='py-10 bg-gray-100 sm:py-16 lg:py-24'>
            <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
               <div className='grid place-content-center'>
                  <Loader />
               </div>
            </div>
         </section>
      )

   return (
      <section className='py-10 bg-gray-100 sm:py-16 lg:py-24'>
         <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24'>
               <div className='relative mb-12'>
                  {product.images && (
                     <img
                        className='w-full rounded-md'
                        src={product.images[0]}
                        alt={product.title}
                     />
                  )}
               </div>

               <div>
                  <div
                     onClick={() => navigate('/products')}
                     className='flex items-center justify-center w-16 h-16 bg-white rounded-full cursor-pointer'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        class='bi bi-arrow-left-circle-fill w-10 h-10'
                        viewBox='0 0 16 16'>
                        <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z' />
                     </svg>
                  </div>
                  <h2 className='mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight'>
                     {product.title}
                  </h2>
                  <p className='mt-6 text-lg leading-relaxed text-gray-600'>
                     $ {product.price}
                  </p>
                  <p className='mt-6 text-lg leading-relaxed text-gray-600'>
                     {product.description}
                  </p>
                  <Link
                     href='#'
                     title=''
                     className='inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80'
                     role='button'>
                     Add to Cart
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}
