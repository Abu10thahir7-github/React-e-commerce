import React from 'react'
import './Navbar.css'
import logo from '../../assets/bag.png'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <h2>ZUDIO</h2>
        </div>
        <div className="pages">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" /> 
              <SearchTwoToneIcon  className='ser-icon'/>
        </div>
        <div className="log-sgn">
            <button className='log'>Log in <LoginIcon/></button>
            <button className='sign'>Sign up</button>
            <button className='add'>Add to Cart <AddShoppingCartTwoToneIcon/></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
