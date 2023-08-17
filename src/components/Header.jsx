import React from 'react'
import KasaLogo from '../images/kasa-logo-red.png'
import { Link, NavLink } from 'react-router-dom'
import '../Style/layout/header.css'

export default function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src={KasaLogo}/>
        <nav className='header_link'>            
                 <NavLink to="/">Accueil</NavLink> 
                 <NavLink to="/about">A propos</NavLink> 
        </nav>
    </div>
  )
}