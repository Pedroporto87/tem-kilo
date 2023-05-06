import '../styles/components/cards.scss'
import { cards } from '../cards'

export const Cards = () => {

    

  return (
    <>
        <section className='cards-title'>
            <h1>Todo dia tem comida boa!</h1>
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
