import React from 'react'
import '../Style/components/appartementCard.css'
import Rating from './Rating'
import Collapse from './Collapse'

export default function AppartementCard({appartement}) {
  return (
    <div className='appartementCard'>

      <div className="appartementCard_container">
        <div className="appartementCard_info">
            <div className='appartementCard_info_title-location'>
                <h2>{ appartement.title }</h2>
                <p>{ appartement.location }</p>
            </div>
            
            <div className="appartementCard_info_tag">
              <ul>
                {appartement.tags.map((tag,id) => (
                  <li key={id}> {tag} </li>
                ))}
              </ul>
            </div>
        </div>

        <div className="appartementCard_host-rate">

            <div className="appartementCard_host-rate_host-information">
                <p> {appartement.host.name} </p>
                <img src={appartement.host.picture} />
            </div>
            
              <Rating rate={appartement.rating} rateMax= {5} />
            

        </div>
      </div>
      
      <div className="appartementCard_collapse">
        <div className='appartementCard_collapse_container'>
          <Collapse title="Description" collapseContent={appartement.description} />
        </div>

        <div className='appartementCard_collapse_container'>
          <Collapse title="Équipements" 
          collapseContent={
            <ul className='equipments_list'>
            {appartement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
          } />
        </div>

        
        
      </div>

    </div>
  )
}
