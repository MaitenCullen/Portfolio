import React from 'react'
import { ImCross } from "react-icons/im";

export const NavBar = () => {
  const theme = ''

  function toggleMenu() {
    let mobileMenu = document.querySelector('.divMobile');
    mobileMenu.classList.toggle('show');
  }
  function hideMenu() {
    let mobileMenu = document.querySelector('.divMobile');
    mobileMenu.classList.remove('show');
  }
  return (
    <div>
        <ul className='navBarUl' data-dropdown-menu id={theme}>
            <li id={theme}><a  href='#skills'>Habilidades Técnicas</a></li>
            <li><a  href='#projects'>Proyectos</a></li>
            <li><a  href='#contact'>Contacto</a></li>
        </ul>
        <button className='navButton' onClick={()=> toggleMenu()}>Menu</button>
        <div className='divMobile'>
          <ul className='mobileNavbar'>
              <li id={theme} className='clean navLink'><a  href='#skills' onClick={hideMenu}>Habilidades Técnicas</a></li>
              <li className='clean navLink'><a  href='#projects' onClick={hideMenu}>Proyectos</a></li>
              <li className='clean navLink'><a  href='#contact' onClick={hideMenu}>Contacto</a></li>
              <i className="icon-nav md-25"  onClick={hideMenu}><ImCross/></i>
          </ul>
        </div>
    </div>
  )
}
