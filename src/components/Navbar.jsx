import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const theme = ''

  function action() {
    console.log('boton andando')
    let link = document.getElementsByClassName('navLink');
    for(var i = 0; i < link.length; i++){
      link[i].classList.toggle('clean')
    }
  }

  return (
    <div>
        <ul className='navBarUl' data-dropdown-menu id={theme}>
            <li id={theme}><a  href='#skills'>Habilidades Técnicas</a></li>
            <li><a  href='#projects'>Proyectos</a></li>
            <li><a  href='#contact'>Contacto</a></li>
        </ul>
        <button className='navButton' onClick={()=> action()}>Menu</button>
        <div className='divMobile'>
        <ul className='mobileNavbar'>
            <li id={theme} className='clean navLink'><a  href='#skills'>Habilidades Técnicas</a></li>
            <li className='clean navLink'><a  href='#projects'>Proyectos</a></li>
            <li className='clean navLink'><a  href='#contact'>Contacto</a></li>
        </ul>
        </div>
    </div>
  )
}
