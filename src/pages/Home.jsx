import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import HomeBannerImg from '../images/Home-banner.png'

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner image={HomeBannerImg} texte="Chez vous, partout et ailleurs"/>
        <Footer/>
    </div>
  )
}
