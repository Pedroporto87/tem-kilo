import '../styles/components/bbq-conteiner.scss'
import BbqImage from '../img/tk-203.jpg'
export const BbqConteiner = () => {
  return (
    <section className='bbq-conteiner'>
        <section className='bbq-image'>
            <img src={BbqImage} alt='foto de uma picanha' />
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
