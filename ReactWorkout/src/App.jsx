import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextToSpeech from '../../sample'
import StartStopCounter from './components/StartStopCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StartStopCounter/>
    </>
  )
}

export default App
