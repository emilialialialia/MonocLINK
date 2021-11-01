import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import {colors} from '../../ColorScheme';

export const Nav = styled.nav`
  background: ${colors.richBlack};
  height: 8vh;
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
  margin-left: 1vw;
  margin-right: 1vw;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 1vw;
  border-top-left-radius: 1vw;
`;
  
export const NavLink = styled(Link)`
  color: ${colors.blurple};
  font-size: 1.25rem;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${colors.lavGrey};
  }
`;

export const HomeLink = styled(Link)`
  color: ${colors.amethyst};
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 302px) {
    display: none;
  }
`;
  