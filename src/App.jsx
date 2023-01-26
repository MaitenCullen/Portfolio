import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Contact} from './screens/Contact'
import { Home } from './screens/Home'
import { Skills } from './screens/Skills'
import { Projects } from './screens/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
         <Home/>
         <Skills/>
         <Contact/>
         <Projects/>
    </div>
  )
}

export default App
