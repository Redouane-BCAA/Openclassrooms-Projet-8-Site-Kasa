import React from 'react'
import {useState} from 'react'
import ArrowUp from '../images/Arrow-up.png'
import ArrowDown from '../images/Arrow-down.png'
import '../Style/components/collapse.css'

export default function Collapse({title, collapseContent}) {

  const [openCollapse, setOpenCollapse] = useState(false);
  const dropCollapse = () => { 
    setOpenCollapse((open) => !open)
  };

  return (
    <div className='collapse'>
        <div className="collapse_title_container">
            <h2 className='collapse_title'>{title}</h2>
            <img onClick={dropCollapse} className='collapse_arrow' src={openCollapse ? ArrowDown : ArrowUp} alt="arrow" />
        </div>

        <div className={`collapse_content ${openCollapse ? "" : "collapse_hidden_txt"}`}>
            <p className="collapse_content_txt">{collapseContent}</p>
        </div>

    </div>
  )
}
