import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import FAQ from './pages/FAQ.jsx'
import Quote from './pages/Quote.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <NavBar/>
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
