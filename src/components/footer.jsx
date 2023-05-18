import '../styles/components/footer.scss'
import SocialMedia from './SocialMedia'
import NavButtons from './nav-buttons'
import { Endereço } from './adress'
import { LogoImage } from './logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <LogoImage />
      <NavButtons />
      <Endereço />
      <SocialMedia />
    </footer>
  )
}

export default Footer