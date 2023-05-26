import '../styles/components/footer.scss'
import SocialMedia from './SocialMedia'
import { WorkingTime } from './workingTime'
import { Endereço } from './adress'
import { LogoImage } from './logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <LogoImage />
      <Endereço />
      <WorkingTime />
      <SocialMedia />
    </footer>
  )
}

export default Footer