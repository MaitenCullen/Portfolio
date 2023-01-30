import React from 'react'
import { NavBar } from '../components/Navbar'



export const Home = () => {
  const theme = 'dark'
  return (
    <div className='homeDiv'>
    <div className='textDiv'>
      <div className='nameDiv'>
      <h3>Hola! soy</h3>
        <h1 className={`h1Name__${theme}`}>Maitén</h1>
        <h2>Front End Developer</h2>
        <h4>Volviendo codigo el cotidiano</h4>


      </div>
    <div className='navFooter'>
        <NavBar/>
    </div>
    </div>
    <aside className='imageDiv'>
        <img src='../../image0.jpg' className='imageHome'/>
    </aside>
    </div>

  )
}
