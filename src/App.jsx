import Greeting from './components/Greeting'
import MenbBar from './components/Header'
// import { GreetUser, Hero } from './components/Hero'

function App() {
   return (
      <div className='grid items-start justify-center px-10 h-screen w-screen bg-slate-900 mx-auto'>
         <MenbBar />

         <div className='w-72 h-72 flex items-center justify-center text-slate-300'>
            <Greeting isLoggedIn />
         </div>
      </div>
   )
}

export default App

// JSX - Javascript XML - Experssion - it’s a syntax extension that allows you to write HTML-like code within your JavaScript files.
