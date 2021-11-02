import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import {colors} from '../../Util';

export const Nav = styled.nav`
  background: ${colors.richBlack}f0;
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
  transition: 0.25s;
  @media screen and (max-width: 350px) {
    padding-top: 2em;
    padding-bottom: 2em;
  }
`;
  
export const NavLink = styled(Link)`
  color: ${colors.blurple};
  font-size: 1.5rem;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px ${colors.blurple}33;
  &.active {
    color: ${colors.lavGrey};
  }
`;

export const NavItem = styled.div`
  color: ${colors.blurple};
  font-size: 1.5rem;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px ${colors.blurple}33;
  &.active {
    color: ${colors.lavGrey};
  }
`;

export const HomeLink = styled(Link)`
  color: ${colors.amethyst};
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px ${colors.amethyst}33;
`;

export const HomeItem = styled.div`
  color: ${colors.amethyst};
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px ${colors.amethyst}33;
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 350px) {
    display: block;
  }
`;
  