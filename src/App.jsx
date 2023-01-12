import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Home } from './screens/Home'
import { Skills } from './screens/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
         <Home/>
         <Skills/>
    </div>
  )
}

export default App
