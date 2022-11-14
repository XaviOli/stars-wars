import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navhome = () => {
  return (
        <header>
          <nav>
            <ul className='nav-links'>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/starships'>STARSHIPS</Link>
              </li>
            </ul>
          </nav>
        </header>
  )
}

export default Navhome;