import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item '>
          <NavLink exact to='/' className='nav-link' activeClassName='nav-item active nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/Pockemons' className='nav-link' activeClassName='nav-item active nav-link'>
            Pockemons
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link' activeClassName='nav-item active nav-link'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
