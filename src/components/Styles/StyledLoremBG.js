import styled from 'styled-components';
import { colors } from '../../ColorScheme';

export const StyledLoremBG = styled.div`
    position: absolute;
    font-size: 10rem;
    text-align: left;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -10;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(180deg,${colors.richBlack} -100%,rgba(0,0,0,0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    overflow-wrap: break-word;
    overflow:hidden;
    font-family: monospace;

`;