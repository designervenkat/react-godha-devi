import { MdDelete, MdCheckCircle } from 'react-icons/md'

import Button from './components/Button'

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
         <Button variant='primary'>Primary</Button>
         <Button
            variant='success'
            icon={<MdCheckCircle />}>
            Success
         </Button>
         <Button
            variant='danger'
            icon={<MdDelete />}>
            Danger
         </Button>
         <Button variant='ghost'>Ghost</Button>
      </div>
   )
}

export default App
