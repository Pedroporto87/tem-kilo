import '../styles/components/cards.scss'
import { cards } from '../cards'

export const Cards = () => {

  return (
    <>
        <section className='cards-title'>
            <h1>Todo dia tem comida boa!</h1>
            <p>Além de uma farta variedade de pratos quentes e saladas do nosso buffet, temos todo dia algum prato especial para você! </p>
        </section>
        <section className='cards-conteiner'> 
            <section className='cards'>
                {cards.map( item => {
                    return(
                        <section className='cards-unit' key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.icon} alt={item.conteudo} />
                            <p>{item.conteudo}</p>
                        </section>
                    )
                })}
            </section>
        </section>
    </> 
  )
}
