import '../styles/components/japan-conteiner.scss'
import  { ImageSlider }  from './image-slider'
import { japaSlider }  from '../japaSlider'

export const JapaConteiner = () => {
  return (
    <section className='japa-conteiner'>
        <section className='japa-text'>
            <h1>Todo dia é dia de Japonês</h1>
            <p>Todo dia temos um buffet especial de comida japonesa, com grande diversidade
                de todo tipo de delicias. Venha experimentar!
            </p>
        </section>
        <section className='japa-image'>
            <ImageSlider slider={ japaSlider } />
        </section>
    </section>
    
  )
}
