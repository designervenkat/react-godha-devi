export default function Button({ children, variant = 'primary', icon }) {
   const baseStyles =
      'font-semibold h-12 w-72 rounded-s-md my-4 flex items-center justify-center gap-x-2'

   const varientStyles = {
      primary: 'bg-blue-700 text-blue-100 hover:bg-blue-600',
      success: 'bg-lime-700 text-lime-100 hover:bg-lime-600',
      danger: 'bg-rose-700 text-rose-100 hover:bg-rose-600',
      ghost: 'bg-transparent text-slate-100 hover:bg-slate-800 border border-slate-600',
   }
   return (
      <button className={`${baseStyles} ${varientStyles[variant]}`}>
         {children} {icon && <span className='text-xl'>{icon}</span>}
      </button>
   )
}
