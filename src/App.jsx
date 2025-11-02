import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// import Home from './pages/Home'
// import About from './pages/About'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import '../src/styles/main.css'
import '../src/App.css'


export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Navbar />
        {/* <main> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        {/* </main> */}
        {/* <Footer /> */}
      </ThemeProvider>
    </HelmetProvider>
  )
}