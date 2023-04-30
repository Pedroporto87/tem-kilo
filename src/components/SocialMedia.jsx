import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import '../styles/components/socialmedia.scss'

const SocialMedia = () => {

const handleClickFb = () => {
    window.location.href='https://www.facebook.com/tem.kilo.39'
}
const handleClickInsta = () => {
    window.location.href='https://www.instagram.com/temkilo_/'
}
const handleClickTT = () => {
    window.location.href='https://www.tiktok.com'
}
return (
    <section className='social-media'>
        <FaFacebook id='facebook' onClick={handleClickFb}/>
        <FaInstagram id='instagram' onClick={handleClickInsta}/>
        <FaTiktok id='tiktok' onClick={handleClickTT}/>
        
    </section>
  )
}

export default SocialMedia