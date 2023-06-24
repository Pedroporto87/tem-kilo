import { Link } from 'react-router-dom'
import HomeImage from '../img/tk-21.jpg'
import '../styles/components/home-conteiner.scss'

export const HomeConteiner = () => {


  return (
    <section className='home-conteiner'>
        <section className='home-image'>
            <img src={HomeImage} alt='prato de comida japonesa' />
        </section>
        <section className='home-texto'>
            <h1 className='home-texto-titulo'>Sobre nós</h1>
            <p className='home-texto-paragrafo'> Quem somos
Desde 1968 servindo comida de verdade no coração da freguesia!
Funcionamos com conceito de restaurante por quilo com comida saborosa, diversificada e de qualidade. Além, é claro, do atendimento gentil e ambiente acolhedor.
Liberdade é escolher o que comer!
Aqui todo mundo pode escolher o que comer e sair satisfeito! 
No nosso buffet você encontra uma ilha exclusiva para saladas alem de poder personalizar sua salada na hora, variedade de pratos quentes (comida brasileira e internacional), na nossa churrasqueira o melhor do churrasco, os melhores salgadinhos e a nossa famosa comida japonesa! 
<br />
Servimos qualidade, variedade e tradição a mais de 50 anos!</p>
            <Link to="/sobre" className='home-link'>Saiba mais...</Link>
        </section>
    </section>
  )
}
