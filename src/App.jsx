import CountFunc from './components/CountFunc'
import Products from './components/Products'

function App() {
   return (
      <div className='bg-slate-800 h-screen w-screen grid place-content-center'>
         <div className='flex items-center justify-center gap-x-2'>
            <h1 className='text-base font-medium text-slate-400'>
               Hello React!
            </h1>
            <img
               src='/react.svg'
               alt=''
               width={20}
               height={20}
            />
         </div>

         {/* Life Cycle Methods */}

         {/* <CountFunc /> */}

         <Products />

         {/* componentDidMount - initial render */}
         {/* componentDidUpdate - when variable or component update it's  re-render */}
         {/* componentWillUnmount - when component are about to distory thing will do */}
      </div>
   )
}

export default App
