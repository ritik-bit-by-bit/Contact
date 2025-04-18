import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation'
import ContactUs from './components/ContactUs'
import Formpart1 from './components/Formpart1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <ContactUs/>
      <Formpart1/>
    </>
  )
}

export default App
