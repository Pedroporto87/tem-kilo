import { useNavigate} from 'react-router-dom'
import NavButtons from './nav-buttons'
import SocialMedia from './SocialMedia'
import '../styles/components/navbar.scss'
import Logo  from '../img/LOGO_VARIAÇÕES_010.png'

const Navbar = () => {
    const navigate = useNavigate()

    const handleClickHome = () => {
        return navigate("/")
    }


  return (
    <nav>
        <figure id='logo'>
            <img src={Logo} onClick={handleClickHome} alt='Logo tem-kilo'/>
        </figure>
        <NavButtons />
        <SocialMedia />
        
    </nav>
  )
}

export default Navbar