import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from "./assets/logo.png"
function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleItemClick = () => {
    setShowMenu(false)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt='' />
        </Link>

        <div className='navbar-toggle' onClick={handleToggleMenu}>
          <FaBars />
        </div>

        <ul className={`navbar-list ${showMenu ? 'open' : ''}`}>
          <li className='navbar-item'>
            <Link to='/' className='navbar-link' onClick={handleItemClick}>
              Accueil
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/shop' className='navbar-link' onClick={handleItemClick}>
              Boutique
            </Link>
          </li>
          
          <li className='navbar-item'>
            <Link to='/contact' className='navbar-link' onClick={handleItemClick}>
              Quis sommes-nous
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
