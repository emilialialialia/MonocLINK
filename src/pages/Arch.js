import {React, useState} from 'react';

import {
  HomeItem,
  Nav,
  NavItem,
  NavMenu,
} from '../components/Styles/StyledNav';

import LoremBG from '../components/LoremBG';

import ArchInstall from "../components/Arch/ArchInstall.js";
import ArchHome from '../components/Arch/ArchHome';
import ArchPrograms from '../components/Arch/ArchPrograms';
  
const Arch = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
      if(page === 'home'){
          return <ArchHome />;
      } else if(page === 'install'){
          return <ArchInstall />;
      } else if(page === 'programs'){
          return <ArchPrograms />;
      }
  }
  
  return (
    <div>
        <LoremBG />
        <Nav>
            <NavMenu> 
            <NavItem onClick={() => setPage('programs')}>programs</NavItem>
            <HomeItem onClick={() => setPage('home')}>arch</HomeItem>
            <NavItem onClick={() => setPage('install')}>installation</NavItem>
            </NavMenu>
        </Nav>
        {renderPage()}
    </div>
  );
};

export default Arch;