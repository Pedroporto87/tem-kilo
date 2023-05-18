import { useNavigate } from 'react-router-dom'
import Logo from '../img/LOGO_VARIAÇÕES_010.png'
import '../styles/components/logo.scss'

export const LogoImage = () => {

    const navigate = useNavigate()

    const handleClickHome = () => {
        return navigate("/")
    }

  return (
    <figure id='logo'>
        <img src={Logo} onClick={handleClickHome} alt='Logo tem-kilo'/>
    </figure>
  )
}
