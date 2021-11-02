import styled from 'styled-components';
import {colors} from '../../Util';

export const Header = styled.div`
    color: ${colors.richBlack};
    font-weight: bold;
    font-size: 7.5vw;
    text-align: center;
    padding-top: .75em;
    padding-bottom: .75em;
    padding-left: .75rem;
    padding-right: .75rem;
    background-color: ${colors.blurple}f0;
    margin-left: 1vw;
    margin-right: 1vw;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    transition: 0.25s;
    text-shadow: 4px 4px ${colors.richBlack}44;
    font-family: monospace;
`;

export const Body = styled.div`
    color: ${colors.blurple};
    background-color: ${colors.richBlack}f0;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vw;
    padding: 1vh;
    border-radius: 1vw;
    font-size: 1.5rem;
`;

// group tag to keep title (make smaller with scroll)
// and navbar at top of screens

// fix lorem bg

