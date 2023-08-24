import React from 'react'
import '../Style/components/appartementCard.css'

export default function AppartementCard({appartement}) {
  return (
    <div className='appartementCard'>

        <div className="appartementCard_info">
            <div className='appartementCard_info_title-location'>
                <h2>{ appartement.title }</h2>
                <p>{ appartement.location }</p>
            </div>
            <div className="appartementCard_info_host-information">
                <p> {appartement.host.name} </p>
                <img src={appartement.host.picture} />
            </div>
        </div>

        <div className="appartementCard_note">

            <div className="appartementCard_note_tag">
              <ul>
                {appartement.tags.map((tag,) => (
                  <li> {tag} </li>
                ))}
              </ul>
            </div>

            <div className="appartementCard_note_rating">
              
            </div>

        </div>





    </div>
  )
}
