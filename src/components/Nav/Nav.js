import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavElements';
  
const NavBar = () => {
  return (
      <Nav>
        <NavMenu>
          <NavLink to='/'>
            monoclink
          </NavLink>
          <NavLink to='/test'>
            test
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default NavBar;