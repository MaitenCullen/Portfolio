import React, { useState } from 'react'
import { db } from '../firebase/Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { RiSendPlaneFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
 





 export const Contact = () => {
  const style = { fontSize: "1.5em" }
  const styleSend = {color:'red', fontSize: "1.5em" }
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

<section id="contact">
  <h1 className="sectionHeader">Contact</h1>
  <div class="contactWrapper"> 
  {!mesaje ? 
      <form id="contact-form" className="formContact" role="form"   onSubmit={contactDates}>
          <div>
            <input type="text" className="formControl" id="name" placeholder='nombre completo' name='nombre' onChange={userContact} required/>
          </div>
          <div>
            <input className="formControl" id="email" input type="email" placeholder='cualestumail@example.com' name='mail' onChange={userContact} required/>
          </div>
        <textarea className="formControl" textarea name="consulta" rows="5" cols="28" onChange={userContact} placeholder='Deje su consulta acá' required></textarea>
        <button className="formButton" id="submit" type="submit" value="Enviar">
          <div className="alt-formButton">
          <RiSendPlaneFill  style={styleSend}/><span className="sendText">Enviar</span>
          </div> 
        </button>
      </form> : <div> <h2> En breve nos vamos a estar contactando!</h2></div> }
      <div className="dataContactContainer">
        <ul className="contactList">
          <li className="listItem"><GoLocation style={style}/><span className="contact-text">Rosario, Argentina</span></li>
          <li className="listItem"><FaWhatsapp style={style}/><span className="contact-text">+54(341)15-3540307</span></li>          
          <li className="listItem"><HiOutlineMail style={style}/><span className="contact-text">cullen.maiten@gmail.com</span></li>
        </ul>
        <hr/>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
           <FiGithub/></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
           <FaLinkedin/></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
           <IoLogoWhatsapp/></a>
          </li>     
        </ul>
        <hr/>
     </div>
  </div>
</section>  
  )
}

  
// <div className='containerContact'>
// <h1> Contactame</h1>
// <div>
//   {!mesaje ? 
//   <div className='divForm' >
//     <form onSubmit={contactDates} className='formContact'>
//     <input type="text" placeholder='nombre completo' name='nombre' onChange={userContact} className='formControl'/>
//     <textarea name="consulta" rows="5" cols="28" onChange={userContact} placeholder='Deje su consulta acá'></textarea>
//     <input type="email" placeholder='cualestumail@example.com' name='mail' onChange={userContact}/>
//     <button type='submit' className='sendButton'>Enviar mensaje</button>  <div class="alt-formButton">
//     <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
//   </div>
//     </form>
//   </div> : <div> <h2> En breve nos vamos a estar contactando!</h2>
//   </div> }
// </div>
// <div>
//   <h4>
//     Queres conocer más o hacer alguna consulta?
//   </h4>
//   <p>
//     Podes completar el formulario y te respondere a la brevedad, tambien podes contactarme por los demás canales.
//   </p>
//   <label>
//     cullen.maiten@gmail.com
//   </label>
//   <label>
//     Linkedin
//   </label>
// </div>
// </div>