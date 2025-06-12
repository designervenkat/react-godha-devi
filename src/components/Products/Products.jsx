import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function Products() {
   const [products, setProducts] = useState([])

   useEffect(() => {
      async function getAllProducts() {
         const response = await fetch('https://dummyjson.com/products')
         const data = await response.json()
         setProducts(data.products)
      }

      getAllProducts()
   }, [])

   console.log(products)

   if (!products)
      return (
         <div className='grid place-content-center'>
            <h2>No Products!</h2>
         </div>
      )

   return (
      <section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
         <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='flex items-end justify-between'>
               <div className='flex-1 text-center lg:text-left'>
                  <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
                     Latest from products
                  </h2>
                  <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0'>
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis.
                  </p>
               </div>
            </div>

            <div className='grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full'>
               {products.map((item) => (
                  <div
                     className='overflow-hidden bg-white rounded shadow'
                     key={item.title}>
                     <div className='p-5'>
                        <div className='relative'>
                           <Link
                              to={`/products/${item.id}`}
                              title=''
                              className='block aspect-w-4 aspect-h-3'>
                              <img
                                 className='object-cover w-full h-full'
                                 src={item.images[0]}
                                 alt=''
                              />
                           </Link>

                           <div className='absolute top-4 left-4'>
                              <span className='px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full'>
                                 {item.availabilityStatus}
                              </span>
                           </div>
                        </div>
                        <span className='block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase'>
                           {item.category}
                        </span>
                        <p className='mt-5 text-2xl font-semibold'>
                           <Link
                              to={`/products/${item.id}`}
                              title=''
                              className='text-black line-clamp-1'>
                              {item.title}
                           </Link>
                        </p>
                        <p className='mt-4 text-base text-gray-600 line-clamp-2'>
                           {item.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
