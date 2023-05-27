import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/components/form.scss'

export const Form = () => {
    const [buttomText, setButtomText] = useState('Enviar')
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        textbox: '',
 })

const formRef = useRef()

function handleChange(event) {
    setForm(event.target.value)
}

function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_zb4g04r',
        "template_y1mgcvt",
        formRef.current,
        "8p1FmUfF10_4rztXU"
      )
      .then(
        (res) => {
          setButtomText("Mensagem enviada com sucesso", () => {
            setTimeout(() => {
              setButtomText(false);
            }, 3000);
          });
        },
        (err) => {
          setButtomText("Sua mensagem não foi enviada");
        }
      );
  }



  return (
    <form className='form' onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor='nome'>Nome:
        <br />
            <input name={form.nome} type='text' placeholder='Seu Nome' required onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='email'>E-mail:  
        <br />
            <input name={form.email} type='email' placeholder='Seu E-mail' required onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='phone'>Telefone: 
        <br />
            <input name={form.telefone} type='tel' placeholder='Seu Telefone' required onChange={handleChange} />
        </label>
        <br />
        <label htmlFor='assunto'>Assunto:  
        <br />
            <input name={form.assunto} type='text' placeholder='' onChange={handleChange}/>
        </label>
        <br />
        <label>Sua Mensagem: 
        <br />
            <textarea name={form.textbox} type='text' style={{resize: 'none'}} placeholder='Como podemos lhe ajudar!' 
            onChange={handleChange}
            required /></label>
        <br />
        <button>{buttomText}</button>
    </form>
  )
}