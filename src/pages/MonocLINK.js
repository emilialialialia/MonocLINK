import React from 'react';
import LoremBG from '../components/LoremBG';

// components
import {Header} from  '../components/Styles/StyledMonocLINK'
import { Typer } from '../components/Typer';


const MonocLINK = () => {

    return (
        <div>
            <LoremBG />
            <Header><Typer data='[ "monoc.link();" ]' /></Header>
        </div>
    );
};

export default MonocLINK;