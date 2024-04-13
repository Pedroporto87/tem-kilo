import '../styles/components/buffet-conteiner.scss'
import { buffetImageSlider } from '../buffet-imageSlder'
import { ImageSlider } from './image-slider'

export const BuffetConteiner = () => {
  return (
    <section className='buffet-conteiner'>
        <section className='buffet-image'>
            <ImageSlider slider={ buffetImageSlider } />
        </section> 
        <section className='buffet-text'>
            <h1>Buffet</h1>
            <p>O Restaurante TemKilo é conhecido por sua variedade e qualidade dos pratos.
                 Em seu buffet a quilo são encontradas diversas opções de saladas, pratos quentes,
                 churrasco e culinaria japonesa.
            </p>
            <p>Outro destaque são as deliciosas opções de sobremesas, também disponíveis a peso: 
                sorvetes, doces típicos, mousses e tortas de dar água na boca! Você não vai resistir!</p>
            <p>Preços:<br/>
            Segunda a Sexta - R$84,90 <br />
            Sabados, domingos e feriados - R$88,90<br />
            Só Carnes - R$93,90<br />
            Sobremesas - R$90,90<br />
            Japonês - R$134,90</p>
            <p>Horário de Funcionamento:<br/>
            Todos os dias, inclusive feriados, das 11:00 as 17:30</p>
        </section>
    </section>
    ) 
}
