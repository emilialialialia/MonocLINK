import React from 'react';

// components
import {Header} from  '../components/Styles/StyledMonocLINK'
import { Typer } from '../components/Typer';

const MonocLINK = () => {


    return (
        <div>
            <Header><Typer data='[ "monoc.link;" ]' /></Header>
        </div>
    );
};

export default MonocLINK;