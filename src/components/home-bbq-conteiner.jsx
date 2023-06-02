import '../styles/components/bbq-conteiner.scss'
import BbqImage from '../img/tk-203.jpg'
import BbqImage2 from  '../img/previa corona-9.jpg'
import BbqImage3 from '../img/tk-5.jpg'
import BbqImage4 from '../img/tk-26.jpg'
export const BbqConteiner = () => {
  return (
    <section className='bbq-conteiner'>
        <section className='bbq-image'>
            <figure className='grid-item-1'>
                <img src={BbqImage} className='grid-img' alt='foto de uma picanha' />
            </figure>
            <figure className='grid-item-2'>
                <img src={BbqImage2} className='grid-img' alt='foto de uma picanha' />
            </figure>
            <figure className='grid-item-3'>
                <img src={BbqImage3} className='grid-img' alt='foto de uma picanha' />
            </figure>
            <figure className='grid-item-4'>
                <img src={BbqImage4} className='grid-img' alt='foto de uma picanha' /> 
            </figure>
            
        </section>
    <section className='bbq-texto'>
        <h1>Churrasco? Todo dia Tem!</h1>
        <p>Na Tem Kilo tem! Churrasco da melhor qualidade, com grande qualidade, variedade 
            no ponto que você desejar!
        </p>
    </section>
</section>
  )
}
