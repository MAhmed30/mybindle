import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'


export default function ThemeToggle() {
      const { theme, setTheme } = useContext(ThemeContext)
    
      const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    
    return (
        <button
            className="btn btn-outline-secondary ms-auto"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
           {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}