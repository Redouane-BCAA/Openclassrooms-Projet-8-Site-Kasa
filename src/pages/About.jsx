import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from "../components/Collapse"
import AboutBannerImg from '../images/About-banner.png'

export default function About() {
  return (
    <div>
        <Header/>
        <Banner image={AboutBannerImg} className="about-banner"/>
        <section className='collapse_container'>

          <Collapse
          title="Fiabilité"
          collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
          />

          <Collapse
          title="Respect"
          collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
          title="Service"
          collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
          title="Sécurité"
          collapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
          />
          
        </section>
        <Footer/>
    </div>
  )
}
