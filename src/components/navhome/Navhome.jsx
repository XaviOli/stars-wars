import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navhome = () => {
  return (
        <header className="border border-solid border-zinc-800 border-x-0">
          <nav className='flex items-center justify-center  h-12'>
            <ul className='flex h-full'>
              <li className="px-4 border border-zinc-800 h-full flex items-center border-y-0">
                <Link to='/'>HOME</Link>
              </li>
              <li className="px-4 border border-zinc-800 h-full flex items-center border-y-0 border-l-0">
                <Link to='/starships'>STARSHIPS</Link>
              </li>
            </ul>
          </nav>
        </header>
  )
}

export default Navhome;