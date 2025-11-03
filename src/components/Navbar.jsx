import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '/images/logo.svg'
import styles from '../styles/navbar.module.css'
import ImageWrapper from './ImageWrapper'
import ThemeToggle from './ThemeToggle'
export default function Navbar() {

  return (
    <nav className={`${styles.navbar}`}>

      <div className="container d-flex justify-content-between align-items-center">

        <Link to="/" className="navbar-brand mx-auto d-flex align-items-center justify-content-center gap-3">
          <ImageWrapper
          className={styles.navbarlogo}
            src={logoImg}
            alt="MyBindle Logo"
          />
          <ThemeToggle />
        </Link>
        
      </div>

    </nav>
  )
}
