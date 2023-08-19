import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import AboutBannerImg from '../images/About-banner.png'

export default function About(image) {
  return (
    <div>
        <Header/>
        <Banner image={AboutBannerImg} className="about-banner"/>
        <Footer/>
    </div>
  )
}
