import './App.css'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Quote from './pages/Quote.jsx'

function App() {
  const [page, setPage] = useState('Home')
  
  return (
    <>
      <NavBar page={page} setPage={setPage} />
      {page === 'Home' && <Home />}
      {page === 'About' && <About />}
      {page === 'Contact' && <Contact />}
      {page === 'Quote' && <Quote />}
    </>
  )
}

export default App;
