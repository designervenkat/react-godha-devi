##### What is useCallback?

-  The useCallback hook is a performance optimization mechanism in React that helps prevent unnecessary re-renders of child components when their parent component re-renders. It achieves this by memoizing (caching) callback functions based on their dependencies. If the dependencies haven't changed, the same function reference is returned, avoiding the creation of a new function object on every render.

##### Example without useCallback :

```js
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
```

-  This is pretty simple, we have two state variables that are holding numbers and three functions to change our state. However, the problem here is that every time the Counter component is re-rendered, all three functions, increment , decrement , and incrementOtherCounter are all recreated!

-  Every time we click a button we should see the functionsSet being logged, and increasing by three each time! This shows us that every time the component is re-rendered, entirely new instances of functions are created, an necessary operation.

##### When to use useCallback :

-  Passing callbacks as props to child components: When a parent component passes a callback function as a prop to a child component, and the child component relies on the same callback reference across renders (e.g., for event handlers), useCallback can prevent the child from re-rendering unnecessarily due to a change in the parent's state or props.

-  Callbacks that are expensive to create: If creating the callback function involves complex calculations or fetching data, using useCallback can improve performance by ensuring it's only created when its dependencies change.

##### When Not to Use useCallback :

-  Simple callbacks without dependencies: If a callback function is simple and doesn’t have any dependencies that change frequently, using useCallback might not be necessary. The overhead of memoization could outweigh the potential performance benefit.

-  Callbacks used within the same component: If a callback is only used within the same component where it’s created, there’s no need for useCallback as React already handles component re-renders efficiently.

##### Additional Considerations :

-  The dependency array in useCallback is crucial. If you omit required dependencies, the function might be recreated unexpectedly, leading to unintended behavior.

-  Overusing useCallback can introduce complexity and potentially make your code harder to maintain. Use it judiciously in scenarios where it demonstrably improves performance.
