import React from 'react'
import { NavBar } from '../components/Navbar'



export const Home = () => {
  const theme = ''
  return (
    <div className='homeDiv'>
    <div className='textDiv'>
      <div className='nameDiv'>
      <h3>Hola! soy</h3>
        <h1 className='h1Name' id={theme}>Maitén</h1>
        <h2 id={theme}>Front End Developer</h2>
        <h4>Volviendo codigo el cotidiano</h4>
      </div>
    <div className='navFooter'>
        <NavBar/>
    </div>
    </div>
    </div>

  )
}
