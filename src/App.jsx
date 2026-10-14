import './App.css'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import AboutUs from './pages/About.jsx'
import ContactUs from './pages/Contact.jsx'

function App() {
  const [page, setPage] = useState('Home')
  
  return (
    <>
      <NavBar page={page} setPage={setPage} />
      {page === 'Home' && <Home />}
      {page === 'About' && <AboutUs />}
      {page === 'Contact' && <ContactUs />}
    </>
  )
}

export default App;
