import React from 'react'
import { useState } from 'react'
import '../Style/components/slideshow.css'
import LeftArrow from '../images/Arrow-left.png'
import RightArrow from '../images/Arrow-right.png'


export default function Slideshow({image}) {
  
  const [current, setCurrent] = useState(0)
  
  const previousImage = () => { 
    setCurrent((indexCurrent) =>(indexCurrent === 0 ? image.length - 1 : indexCurrent - 1))}

  const nextimage = () => {
  setCurrent ((indexCurrent) => (indexCurrent === image.length - 1 ? 0 : indexCurrent + 1))}



  return (
    <div className='slideshow'>
      <img className='slideshow_img'  src={image[current]} alt="" />
      <img onClick={previousImage} className='slideshow_leftArrow' src={LeftArrow} alt="leftArrow" />
      <img onClick={nextimage} className='slideshow_rightArrow' src={RightArrow} alt="rightArrow" />
      <p className="slideshow_count">{current +1}/{image.length}</p>
    </div>
  )
}


