import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import '../styles/components/socialmedia.scss'

const SocialMedia = () => {

const handleClickFb = () => {
    window.location.href='https://www.facebook.com/tem.kilo.39'
}
const handleClickInsta = () => {
    window.location.href='https://www.instagram.com/temkilo_/'
}
const handleClickWP = () => {
    window.location.href="https://api.whatsapp.com/send?phone=5521988399021&text=Texto%20aqui"
}
return (
    <section className='social-media'>
        <FaFacebook id='facebook' onClick={handleClickFb}/>
        <FaInstagram id='instagram' onClick={handleClickInsta}/>
        <FaWhatsapp id='tiktok' onClick={handleClickWP}/>
        
    </section>
  )
}

export default SocialMedia