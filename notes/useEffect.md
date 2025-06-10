#### React useEffect Hooks

##### Introductions

-  In the React ecosystem, the useEffect Hook stands out as a crucial feature for any developer. Its ability to manage side effects in functional components makes it indispensable, effectively replacing various lifecycle methods found in class components.

-  In React functional components, effectively handling side effects is essential for tasks like data fetching, DOM manipulation, or interacting with external data sources. Two key hooks, useEffect and useLayoutEffect, are utilized for managing these side effects. While these hooks might seem similar, they serve distinct purposes and are used in specific contexts.

##### A useEffect hook takes in two arguments:

-  setup: this is a function that contains your useEffect’s logic. This function is the side effect you want to perform. It runs after the component has been rendered. This can include data fetching, setting up subscriptions, or any code that needs to run after the component is displayed. You can also define an optional cleanup function in this logic that React will run after your component has been removed from the DOM. React will also first run the cleanup function with the old values before running the setup function with the new values when a re-render is triggered by changed dependencies.

-  dependency array (optional): an array of reactive values e.g. state, props, functions and variables declared inside your component that your setup function is dependent on to run. If any of the dependencies change between renders, the effect function will run again. If the dependencies array is empty, the effect will run only once after the initial render.

-  cleanup function (optional): If your effect has cleanup requirements (e.g., unsubscribing from a subscription), you can return a function from the useEffect. This function will be called before the component is unmounted, and also before the next effect run if the dependencies change.

##### Basic Syntax and Usage

```js
useEffect(() => {
   // Side effect logic
   return () => {
      // Cleanup logic
   }
}, [dependencies])
```

-  The function you pass to useEffect is the primary effect, and the return function is for cleanup. The dependencies array dictates when the effect should run.

##### Dependency Array

-  The dependency array in useEffect is a crucial feature that determines the execution of the effect. It's an array of values (typically props and state variables) that the effect relies on. If any of these values change between renders, the effect is re-executed.

   ##### No Dependency Array - the effect runs once after the initial render, similar to componentDidMount.

   ```js
   useEffect(() => {
      console.log('This runs after every render')
   })
   ```

   ##### Empty Dependency Array - the effect runs once after the initial render, similar to componentDidMount.

   ```js
   useEffect(() => {
      console.log('This runs once after the initial render')
   }, [])
   ```

   ##### With Dependencies - the effect runs once after the initial render, similar to componentDidMount.

   ```js
   const [count, setCount] = useState(0)
   useEffect(() => {
      console.log(`Count has changed to: ${count}`)
   }, [count])
   ```

##### Use Cases

-  Fetching Data on Component Mount

-  Subscriptions and Unsubscribing

-  Event Listeners and Remove Listners

-  DOM Manipulation

-  Interval or Timeout Operations

-  Dependency-based Operations

-  Animation Effects

##### Cleanup Function

-  The cleanup function in useEffect is essential for preventing memory leaks and for removing subscriptions or event listeners set up during component mounting.

##### How It Works

-  The function passed to useEffect can return a cleanup function. This function is executed:

   -  Before re-running the effect: If the component updates and useEffect is set to run again, the cleanup function from the previous render is executed first.

   -  Before unmounting the component: When the component is about to unmount, React executes the cleanup function.

##### Cleanup Examples

```js
useEffect(() => {
   const handleResize = () => {
      // Handle the event
   }
   window.addEventListener('resize', handleResize)
   return () => {
      window.removeEventListener('resize', handleResize)
   }
}, [])
```
