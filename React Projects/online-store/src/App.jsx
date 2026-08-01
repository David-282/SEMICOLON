import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <p className="text-blue-600 dark:text-sky-400">The quick brown fox...</p>
      </>
  )
}

export default App
