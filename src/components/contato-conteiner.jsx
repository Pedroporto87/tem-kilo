
import '../styles/components/contato-conteiner.scss'
import { Form } from '../components/form'

export const ContatoConteiner = () => {
  return (
    <section className='contato-conteiner'>
        <section className='contato-image'>
            <h1>Venha nos visitar!</h1>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.2358954171527!2d-43.3443797255807!3d-22.941537939112266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd9e722638417%3A0x9dc37e9bc6a086b!2sTemKilo!5e0!3m2!1spt-BR!2sbr!4v1684364790614!5m2!1spt-BR!2sbr" 
             allowfullscreen="" loading="lazy" ></iframe>
        </section>
        <section className='contato-form'>
            <section className='contato-p'>
                <h1>Entre em contato com a gente!</h1>
                <p> Oferecemos um menu diferenciado, com opções variadas. Entre em contato conosco e solicite um orçamento!</p>
                <p> Tanto eventos pessoais e corporativos como celebrações podem ser reservados. Entre em contato:  2436-1705</p>
                <h1>...ou por e-mail</h1>
            </section>        
                <Form />
        </section>
    </section>
  )
}
