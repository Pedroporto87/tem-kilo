import { useNavigate } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../styles/components/navbar.scss'
import Logo  from '../img/LOGO_VARIAÇÕES_07.png'

const socialMedia = [
    {name: 'facebook', icon: <FaFacebook /> },
    {name: 'instagram', icon: <FaInstagram />},
    {name: 'tiktok', icon: <FaTiktok />},
];

const Navbar = () => {
    const navigate = useNavigate()

    const handleClickHome = (event) => {
        event.previousDefault()
        return navigate("/")
    }


  return (
    <nav>
        <figure id='logo'>
            <img src={Logo} onClick={handleClickHome} />
        </figure>
        <section id='page-links'>
            <ul>
                <NavLink to="/" activeClassName="navbar-button">Home</NavLink>
                <NavLink to="/sobre" activeClassName="navbar-button">Sobre nós</NavLink>
                <NavLink to="/contato" activeClassName="navbar-button">Contato</NavLink>
            </ul>
        </section>
        <section id='social-media'>
            {socialMedia.map((network) => {
                <a href='#' className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            })}

        </section>
    </nav>
  )
}

export default Navbar