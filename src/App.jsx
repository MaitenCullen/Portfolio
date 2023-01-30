import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import {Contact} from './screens/Contact'
import { Home } from './screens/Home'
import { Skills } from './screens/Skills'
import { Projects } from './screens/Projects';

function App() {
const [ theme, setTheme] = useState('light')
const toggleTheme = () => {
  if (theme === 'light'){
    setTheme('dark');
  } else {
    setTheme('light');
  }
};
useEffect(() => {
  document.body.className = theme;
}, [theme]);
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Dame Click</button>
         <Home/>
         <Skills/>
         <Contact/>
         <Projects/>
    </div>
  )
}

export default App
