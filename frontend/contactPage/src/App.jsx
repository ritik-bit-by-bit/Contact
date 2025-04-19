
import './App.css'
import Navigation from './components/navigation'
import ContactUs from './components/ContactUs'
import Formpart1 from './components/Formpart1'


function App() {

  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url('/images/bg.png')"}}>
      <Navigation/>
      <ContactUs/>
      <Formpart1/>
    </div>
  )
}

export default App
