import { useNavigate, NavLink} from 'react-router-dom'
import SocialMedia from './SocialMedia'
import '../styles/components/navbar.scss'
import Logo  from '../img/LOGO_VARIAÇÕES_07.png'

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
        <section className='page-links'>
            <ul>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/sobre">Sobre nós</NavLink>
                <NavLink to="/contato" >Contato</NavLink>
            </ul>
        </section>
        <SocialMedia />
        
    </nav>
  )
}

export default Navbar