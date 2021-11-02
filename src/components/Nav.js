import React from 'react';
import {
  HomeLink,
  Nav,
  NavLink,
  NavMenu,
} from './Styles/StyledNav';
  
const NavBar = () => {


  return (
      <Nav>
        <NavMenu>
        <NavLink to='/api'>
            api
          </NavLink>
          <NavLink to='/skills'>
            skills
          </NavLink>
          <HomeLink to='/'>
            monoclink
          </HomeLink>
          <NavLink to='/arch'>
            arch
          </NavLink>
          <NavLink to='/games'>
            games
          </NavLink>
        </NavMenu>
      </Nav>
  );
};

export default NavBar;