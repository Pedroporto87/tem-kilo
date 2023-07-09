import '../styles/components/bbq-conteiner.scss'
import BbqImage from '../img/tk-203.jpg'
import BbqImage2 from  '../img/norte-grill-504.jpg'
import BbqImage3 from '../img/maio-23-56.jpg'
import BbqImage4 from '../img/tk-26.jpg'
export const BbqConteiner = () => {
  return (
    <section className='bbq-conteiner'>
        <section className='bbq-image'>
            
                <img src={BbqImage} className='grid-img' alt='foto de uma picanha' />
            
            
                <img src={BbqImage2} className='grid-img' alt='foto de uma picanha' />
            
            
                <img src={BbqImage3} className='grid-img' alt='foto de uma picanha' />
            
                <img src={BbqImage4} className='grid-img' alt='foto de uma picanha' /> 
            
            
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
