import { Outlet } from 'react-router'
import HeaderSection from '../Header/Header'
import FooterSection from '../Footer/Footer'

function Layout() {
   return (
      <>
         <HeaderSection />
         <Outlet />
         <FooterSection />
      </>
   )
}

export default Layout
