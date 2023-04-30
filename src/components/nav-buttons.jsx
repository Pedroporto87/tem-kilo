import { NavLink } from "react-router-dom"
import '../styles/components/nav-buttons.scss'

const NavButtons = () => {
  return (
    <section className='page-links'>
    <ul>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/sobre">Sobre nós</NavLink>
        <NavLink to="/contato" >Contato</NavLink>
    </ul>
</section>
  )
}

export default NavButtons