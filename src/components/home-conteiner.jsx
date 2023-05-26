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
            <p className='home-texto-paragrafo'> O Restaurante Beco do Alemão é conhecido por sua variedade e qualidade dos pratos,
                 em seu buffet a quilo são encontradas diversas opções de saladas e pratos quentes, 
                 além de churrasco, comida japonesa e saladas personalizadas e sobremesas irresistiveis. 
                 Também contamos com um charmoso bar com opções de drinks,
                 petiscos e pratos a la carte deliciosos.</p>
            <Link to="/sobre" className='home-link'>Saiba mais...</Link>
        </section>
    </section>
  )
}
