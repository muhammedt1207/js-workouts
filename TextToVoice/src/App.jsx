import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextToSpeech from './components/TextToVoice'
import CountdownTimer from './components/StartStopCounter'
import { UpperCase } from './components/Hoc'
import DropDown from './components/DropDown'
import MyComponent from './components/RenderProps'
import UseMemo from './components/UseMemo'
import Debounce from '../../ReactWorkout/src/Debouncing/Debouncing'
import Debounsing from './components/Debounsing'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <>
     {/* <CountdownTimer/> */}
     {/* <UpperCase text='hello world'/> */}
     {/* <DropDown/> */}
     {/* <MyComponent/> */}
     {/* <UseMemo/> */}
     <Debounsing/>
    </>
  )
}

export default App
