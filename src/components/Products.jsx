import { useEffect, useState } from 'react'

export default function Products() {
   const [products, setProducts] = useState([])
   const [message, setMessage] = useState('')

   useEffect(() => {
      async function getAllProducts() {
         try {
            const response = await fetch(
               'https://68351b82cd78db2058c04649.mockapi.io/products'
            )
            if (!response.ok) {
               throw new Error('Failed to fetch products')
            }
            const productData = await response.json()
            setProducts(productData)

            // Set message only if there are no products
            if (productData.length === 0) {
               setMessage('Product not found!')
            }
         } catch (error) {
            setMessage('Error fetching products!')
         }
      }

      getAllProducts()
   }, [])

   console.log(products)
   return (
      <div className='bg-white w-screen h-[80vh]'>
         <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
               Products
            </h2>

            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
               {products.length > 0 ? (
                  products.map((product) => (
                     <div
                        key={product.id}
                        className='group relative'>
                        <img
                           alt={product.title}
                           src={product.image}
                           className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80'
                        />
                        <div className='mt-4 flex justify-between'>
                           <div>
                              <h3 className='text-sm text-gray-700'>
                                 <a href={product.id}>
                                    <span
                                       aria-hidden='true'
                                       className='absolute inset-0'
                                    />
                                    {product.title}
                                 </a>
                              </h3>
                              <p className='mt-1 text-sm text-gray-500'>
                                 {product.desc}
                              </p>
                           </div>
                           <p className='text-sm font-medium text-gray-900'>
                              {product.price}
                           </p>
                        </div>
                     </div>
                  ))
               ) : (
                  <p className='text-sm text-red-500'>{message}</p>
               )}
            </div>
         </div>
      </div>
   )
}
