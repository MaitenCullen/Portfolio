import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const theme = ''
  const action = () => {
    let link = document.getElementsByClassName('navLink');
    for(var i = 0; i < link.lenght; i++){
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
        <ul className='mobileNavbar'>
          <button className='navButton' onClick={action}>Menu</button>
        <li id={theme} className='clean navLink'><a  href='#skills'>Habilidades Técnicas</a></li>
            <li className='clean navLink'><a  href='#projects'>Proyectos</a></li>
            <li className='clean navLink'><a  href='#contact'>Contacto</a></li>
        </ul>
    </div>
  )
}
