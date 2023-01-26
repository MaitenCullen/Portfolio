import React, { useState } from 'react'
import { db } from '../firebase/Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'






 export const Contact = () => {
  const [ contacto, setcontacto] = useState({})
  const [mesaje, setMesaje] = useState('')
  const userContact = (event) => {
    setcontacto({
          ...contacto,
          [event.target.name]: event.target.value,
          // [event.target.consulta]: event.target.value,
          // [event.target.mail]: event.target.value,
    })
  }

  console.log(contacto)
const contactDates = (event) => {
  event.preventDefault()
  const contactUser = collection(db, "usuarios")
  addDoc(contactUser, {
    contacto,
    fecha: serverTimestamp()
  })
  .then((response)=> {
    setMesaje(response.id)
  })
}

  return (
    <div>
      <h1> Contactame</h1>
      <div>
        {!mesaje ? 
        <div>
          <form onSubmit={contactDates}>
          <input type="text" placeholder='nombre completo' name='nombre' onChange={userContact}/>
          <textarea name="consulta" rows="5" cols="28" onChange={userContact} placeholder='Deje su consulta acá'></textarea>
          <input type="email" placeholder='cualestumail@example.com' name='mail' onChange={userContact}/>
          <button type='submit' >Enviar mensaje</button>
          </form>
        </div> : <div> <h2> En breve nos vamos a estar contactando!</h2>
        </div> }
      </div>
    </div>
  )
}

