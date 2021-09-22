import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          MAJUK
          <i class="fas fa-drone"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Collection <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/leaderBoard'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              LeaderBoard
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className='nav-item'>
          <Link
              to='/admin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Admin <i className='fas fa-caret-down' />
            </Link>
            </li>
            <li className='nav-item'>
          <Link
              to='/admin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Admin <i className='fas fa-caret-down' />
            </Link>
            </li>
            <li className='nav-item'>

              <Button />
            
            </li>
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;