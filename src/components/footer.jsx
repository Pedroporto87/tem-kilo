import '../styles/components/footer.scss'
import SocialMedia from './SocialMedia'
import NavButtons from './nav-buttons'
import { Endereço } from './adress'

const Footer = () => {
  return (
    <footer className='footer'>
      <NavButtons />
      <Endereço />
      <SocialMedia />
    </footer>
  )
}

export default Footer