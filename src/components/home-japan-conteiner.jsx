import '../styles/components/japan-conteiner.scss'
import JapaImage from '../img/tk-18-2.jpg'

export const JapaConteiner = () => {
  return (
    <section className='japa-conteiner'>
        <section className='japa-text'>
            <h1>Todo dia é dia de Japonês</h1>
            <p>Todo dia temos um buffet especial de comida japonês com grande diversidade
                de todo tipo de delicias. Venha experimentar!
            </p>
        </section>
        <section className='japa-image'>
            <img src={JapaImage} alt='prato com comida japonesa' />
        </section>
    </section>
    
  )
}
