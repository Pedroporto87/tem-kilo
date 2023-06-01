import '../styles/components/japan-conteiner.scss'
import  ImageSlider  from './image-slider'

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
            <ImageSlider />
        </section>
    </section>
    
  )
}
