import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000000;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  align-items: center;
  justify-content: center;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  font-size: 1.25rem;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
`;

export const HomeLink = styled(Link)`
  color: #ffffff;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  