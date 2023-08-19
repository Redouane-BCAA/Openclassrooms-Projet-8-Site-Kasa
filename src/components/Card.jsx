import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/components/card.css'

export default function Card({card}) {
  return (
    
        <Link to={"/AppartementsPage" + card.id}>
            <article className='card' key={card.id}>
                <img className='card_img' src={card.cover} alt={card.title} />
                <p className='card_title'>{card.title}</p>
            </article>
        </Link> 
    
  )
}
