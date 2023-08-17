import React from 'react'
import footerLogo from "../images/kasa-logo-white.png"
import "../Style/layout/footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <img className='footer_logo' src={footerLogo} />
      <p className='footer_content'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
