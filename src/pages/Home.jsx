import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import HomeBannerImg from '../images/Home-banner.png'
import Card from '../components/Card'
import data from '../datas/data.json'

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner image={HomeBannerImg} texte="Chez vous, partout et ailleurs"/>
        <section className='container_card'>
          {data.map(card =>(
             <Card key={card.id} card={card}
             />
          ))}
        </section>
        <Footer/>
    </div>
  )
}
