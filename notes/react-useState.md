#### useState Hook

##### Introduction

-  The useState() hook is a fundamental tool in React for managing state within functional components. Prior to the introduction of hooks, state management was primarily handled in class components. However, with the useState() hook, functional components gain the ability to manage state in a straightforward and concise manner.

-  The  useState() hook is used by importing it from the React library. It is then invoked within the functional component, typically during initialization. The hook returns an array containing the current state value and a function to update that state.

##### useState Hook

-  useState hook is used for managing states within the functional components. States are used to manage and store some data within a component. Whenever a state changes React will automatically re-render the component to display the updated value.

-  useState take only one parameter, the value you want your initial state to have initially. It returns an array with two values, that we get using array destructuring.

   -  Initial State: During the first re-render this will have the value that you passed as the parameter.

   -  set Function: The set Function will let you update the value of the state to a different value and will trigger a re-render if the value provided in the set function is different.

> Note: useState being a hook can only be called on top or in your custom hook. You can’t call it inside a function, loop or condition.

##### Basic Syntax

```js
import { useState } from 'react'

export default function CounterApp() {
   const [count, setCount] = useState(0)

   const addCount = () => {
      setCount(count + 1)
   }

   return <button onClick={addCount}>Add Count {count}</button>
}
```

##### Set Function

-  Set Function
   The set function lets you update the current value of the state to a different value and trigger a re-render. You can pass the new value of the state directly into the function or a function that returns a new state.

> Note: If you’re passing a function to the set function, it must be pure, it must take the previous state as the argument and return a new state.

-  The set function only updates the state variable for the next render. If you read the variable in the already executing function after calling the set function, you will still get the old value that was before your call.

##### Batching

-  React uses Batching behind the scenes to update multiple state variables in only one re-render, it prevents too many re-renders to improve performance.
