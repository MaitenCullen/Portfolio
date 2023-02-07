import { useEffect, useState } from 'react'
import {Contact} from './screens/Contact'
import { Home } from './screens/Home'
import { Skills } from './screens/Skills'
import { Projects } from './screens/Projects';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import { NavBar } from './components/Navbar';

export const ThemeContext =  createContext(null);
function App() {
 const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='app' id={theme}>
        <div className='switch'>
          <label>{theme === 'light' ? "The Force" : "Dark Side"} </label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
          <Home/>
          <Skills/>
          <Contact/>
          <Projects/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
