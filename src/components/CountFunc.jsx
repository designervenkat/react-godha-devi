import { useEffect, useState } from 'react'

export default function CountFunc() {
   const [count, setCount] = useState(0)

   // This will run when component is mounted
   //    useEffect(() => {
   //       // you can write logic here

   //       console.log('Component Mounted')

   //       return () => {
   //          console.log('Component Unmounted')
   //       }
   //    }, []) // This will promise to run atleast onces

   //    //   This run whenever the variable get changes - componentDidMount
   //    useEffect(() => {
   //       // you can write logic here
   //       console.log(`Updating the component - ${count}`)
   //    }, [count]) // when variable get update this will rerender the component

   //    useEffect(() => {
   //       console.log(window)

   //       document.title = `Count: ${count}`
   //    })

   useEffect(() => {
      //   const handleResize = () => console.log('Resized!')
      //   window.addEventListener('resize', handleResize)
      //   return () => window.removeEventListener('resize', handleResize)
      //   const interval = setInterval(() => console.log('Interval'), 1000)
      //   return () => clearInterval(interval)
   }, [])

   return (
      <div className='text-white'>
         <h2>Count App using Functional Component</h2>
         <div>{count}</div>
         <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
   )
}
