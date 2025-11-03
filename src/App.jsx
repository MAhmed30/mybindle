import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import '../src/styles/main.css'
import '../src/App.css'


export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  )
}