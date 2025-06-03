const Header = () => {
   const menu = [
      { name: 'Home', link: 'www.google.com', icon: '❌' },
      { name: 'Blog', link: 'www.blog.com', icon: '✅' },
      { name: 'Showcase', link: 'www.showcase.com', icon: '🎉' },
   ]

   return (
      <div className='h-20 w-full min-w-3xl bg-slate-800 flex items-center justify-between py-5 px-20'>
         <img
            src='/vite.svg'
            width={50}
            height={50}
         />

         <div className='text-slate-400 flex items-center justify-center gap-x-4'>
            {/* <a href='#'>Document</a>
            <a href='#'>Blog</a>
            <a href='#'>Showcase</a> */}

            {menu.map((item) => (
               <a href={item.link}>
                  {item.icon} {item.name}
               </a>
            ))}
         </div>
      </div>
   )
}

export default Header
