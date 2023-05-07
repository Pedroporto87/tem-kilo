import Mapa from '../img/Captura de Tela (26).png'
import '../styles/components/contato-conteiner.scss'

export const ContatoConteiner = () => {
  return (
    <section className='contato-conteiner'>
        <section className='contato-image'>
            <h1>Venha nos visitar!</h1>
            <p>Estr. de Jacarepaguá, 7725, Jacarepaguá, Rio de Janeiro - RJ</p>
            <img src={Mapa} alt='prato de comida japonesa' />
        </section>
        <section className='contato-form'>
            <section className='contato-p'>
                <h1>Entre em contato com a gente!</h1>
                <p> Oferecemos um menu diferenciado, com opções variadas. Entre em contato conosco e solicite um orçamento!</p>
                <p> Tanto eventos pessoais e corporativos como celebrações podem ser reservados. Entre em contato:  2436-1705</p>
            </section>
        </section>
    </section>
  )
}
