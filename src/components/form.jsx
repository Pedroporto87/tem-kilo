import { useState } from 'react'
import '../styles/components/form.scss'

export const Form = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        textbox: '',
 })

function handleChange(event) {
    setForm(event.target.value)
}


  return (
    <form className='form'>
        <label htmlFor='nome'>Nome:
        <br />
            <input name='nome' type='text' placeholder='Seu Nome' required onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='email'>E-mail:  
        <br />
            <input name='email' type='email' placeholder='Seu E-mail' required onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='phone'>Telefone: 
        <br />
            <input name='phone' type='tel' placeholder='Seu Telefone' required onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='assunto'>Assunto:  
        <br />
            <input name='assunto' type='text' placeholder='' onChange={handleChange}/>
        </label>
        <br />
        <label>Sua Mensagem: 
        <br />
            <textarea name='textarea' type='text' style={{resize: 'none'}} placeholder='Como podemos lhe ajudar!' 
            onChange={handleChange}
            required /></label>
        <br />
        <button> Envie Aqui</button>
    </form>
  )
}