import { SiGooglemaps } from 'react-icons/si';
import { FaWhatsapp } from "react-icons/fa";
import '../styles/components/adress.scss'

export const Endereço = () => {

    const handleAdress = () => {
        window.location.href = 'https://www.google.com.br/maps/place/TemKilo/@-22.9415429,-43.3443797,17z/data=!3m1!4b1!4m6!3m5!1s0x9bd9e722638417:0x9dc37e9bc6a086b!8m2!3d-22.9415429!4d-43.3418048!16s%2Fg%2F1tg_mvwm'
    }
    const handleClickWP = () => {
      window.location.href="https://api.whatsapp.com/send?phone=5521979690445&text=Texto%20aqui"
  }

  return (
    <section className='adress'>
        <a onClick={handleAdress}><SiGooglemaps />  
        Estr. de Jacarepaguá, 7725  Freguesia, Rio de Janeiro
        </a>
        <p>Tel:(21) 2436-1705</p>
        <a onClick={handleClickWP}><FaWhatsapp />{' '}(21)97969-0445</a>
    </section>
  )
}
