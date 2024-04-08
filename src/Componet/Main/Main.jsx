import React from 'react'
import './Main.css'
import mainImg from '../../assets/main bg.jpg'
function Main() {
  return (
    <div>
     <div className="main">
      <div className="main-img">
        <div className="title">

          <h1>NEW SEASON ARRIVELS</h1>
          <h2>CHECK OUT ALL THE TRENDS</h2>
        </div>
        <img src={mainImg} alt="" />
      </div>
     </div>
      
    </div>
  )
}

export default Main
