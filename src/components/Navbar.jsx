import React from 'react'

export const NavBar = (props) => {
  console.log(props, "aca la props")
  const theme = ''
  return (
    <div>
        <ul className='navBarUl' data-dropdown-menu id={theme}>
            <li id={theme}><a>Proyectos</a></li>
            <li><a>Servicios</a></li>
            <li><a>Habilidades Técnicas</a></li>
            <li><a>Contacto</a></li>
        </ul>
    </div>
  )
}
