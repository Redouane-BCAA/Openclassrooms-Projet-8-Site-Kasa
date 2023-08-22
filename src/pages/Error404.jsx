import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../Style/pages/error.css'

export default function Error404() {
  return (
    <div>
        <Header/>
        <section className='error'>

        <h1 className="error_title">404</h1>
        <p className="error_txt">Oups! La page que vous demandez n'existe pas.</p>
        <Link className='error_link_redirection' to="/">Retourner sur la page d’accueil</Link>
        
        </section>
        <Footer/>
    </div>
  )
}
