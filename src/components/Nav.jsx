import { hamburger } from '../assets/icons/index.js'
import { headerLogo } from '../assets/images/index.js'



const Nav = () => {
  return (
    <header >
        <nav className='flex justify-between items-center max-container'>
           <a href="/">
            <img src={headerLogo} alt='Logo' width={130} height={29} />
            </a> 
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

            </ul>
        </nav>
    </header>
  )
}

export default Nav;