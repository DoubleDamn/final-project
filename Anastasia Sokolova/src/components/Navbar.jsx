import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
 
      <ul className='navbar-nav mr-auto'>
      <li > 
         <p className='navbar-brand '> Pokedex </p>
      </li>
        <li className='nav-item '>
          <NavLink exact to='/' className='nav-link' activeClassName='nav-item active nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/Pokemons' className='nav-link' activeClassName='nav-item active nav-link'>
            Pokemons
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
