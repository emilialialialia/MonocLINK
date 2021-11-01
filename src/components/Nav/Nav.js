import React from 'react';
import {
  HomeLink,
  Nav,
  NavLink,
  NavMenu,
} from '../Styles/NavElements';
  
const NavBar = () => {
  return (
      <Nav>
        <NavMenu>
          <NavLink to='/test'>
            test
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
/**
 * idea:
 * monoclink homepage in center, bigger than the rest
 * pops out of navbar a bit
 * other pages to left and right
 */
  
export default NavBar;