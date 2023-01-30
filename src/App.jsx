import { useEffect, useState } from 'react'
import {Contact} from './screens/Contact'
import { Home } from './screens/Home'
import { Skills } from './screens/Skills'
import { Projects } from './screens/Projects';
import { LightModeProvider } from './context/UseContext';
import { useContext } from 'react';

function App() {


const {LightMode} = useContext(ThemeContext);
  return (
    <div className={LightMode ? `Container Container--Light` : `Container Container--Dark`}>
      <LightModeProvider>
      <button onClick={toggleTheme}>Dame Click</button>
         <Home/>
         <Skills/>
         <Contact/>
         <Projects/>
      </LightModeProvider>
    </div>
  )
}

export default App
