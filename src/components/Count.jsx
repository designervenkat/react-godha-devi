import React, { useState, useCallback } from 'react'

const functionsSet = new Set()

export default function Counter() {
   const [count, setCount] = useState(0)
   const [count2, setCount2] = useState(0)

   const increment = () => {
      setCount(count + 1)
   }
   const decrement = () => {
      setCount(count - 1)
   }
   const incrementOtherCounter = () => {
      setCount2(otherCounter + 1)
   }

   functionsSet.add(increment)
   functionsSet.add(decrement)
   functionsSet.add(incrementOtherCounter)

   console.log(functionsSet)

   return (
      <div className='text-white grid grid-cols-1 gap-4 place-content-center '>
         <h2>Count: {count}</h2>

         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
         <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
      </div>
   )
}
