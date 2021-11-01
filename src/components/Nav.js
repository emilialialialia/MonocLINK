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
          <NavLink to='/skills'>
            skills
          </NavLink>
          <HomeLink to='/'>
            monoclink
          </HomeLink>
          <NavLink to='/test2'>
            test2
          </NavLink>
        </NavMenu>
      </Nav>
  );
};

  
export default NavBar;