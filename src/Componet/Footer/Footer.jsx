import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
    <div className="footer-title">
      <h2>About</h2>
    </div>
    <div className="all-item">
    
    <div className='item'>

       <div className="curr-items">
        <h4>Current </h4>
        <ul>
          <li>Women's</li>
          <li>Men's</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>& More</li>
        </ul>
       </div>
       <div className="soon-items">
        <h4>Coming Soon</h4>
        <ul>
          <li>Football Items</li>
          <li>Cricket Items</li>
          <li>& All Sports Items </li>
          <li>Boots Items</li>
          <li>Lap & Computers </li>
          <li>& More </li>
        </ul>
       </div>
    </div>
    </div>
      
    </div>
  )
}

export default Footer
