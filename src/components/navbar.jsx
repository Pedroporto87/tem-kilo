import NavButtons from './nav-buttons'
import SocialMedia from './SocialMedia'
import '../styles/components/navbar.scss'
import { LogoImage } from './logo'

const Navbar = () => {
  
  return (
    <nav>
        <LogoImage />
        <NavButtons />
        <SocialMedia />
        
    </nav>
  )
}

export default Navbar