import React from 'react'
import starWhite from '../images/star-white.png'
import starRed from '../images/star-active 1.png'
// import Appartement from '../pages/Appartement'

export default function Rating({rate, rateMax}) {
  
  const stars = [];

  for (let i = 1; i <= rateMax; i++) {
    const starIcon = i <= rate ? starRed : starWhite;

    const starElement = (
      <img
        key={i}
        src={starIcon}
        className="star"
      />
    );

    stars.push(starElement);
  }

  return (
    <div className="rating">
      {stars}
    </div>
  );
}
