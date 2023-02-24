import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Contact} from './screens/Contact'
import { Skills } from './screens/Skills'
import { Projects } from './screens/Projects';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import Home from './screens/Home';
import { Header } from './screens/Header';


export const ThemeContext =  createContext(null);
function App() {
 const [theme, setTheme] = useState('dark');

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
        <section className='sectionAPP'>
          <Home/>
        </section>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
