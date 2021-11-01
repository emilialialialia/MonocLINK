import styled from 'styled-components';
import {colors} from '../../ColorScheme';

export const Header = styled.div`
    color: ${colors.richBlack};
    font-weight: bold;
    font-size: 4rem;
    text-align: center;
    padding: 1em;
    background-color: ${colors.blurple}f0;
    margin-left: 1vw;
    margin-right: 1vw;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
`;

export const Body = styled.div`
    color: ${colors.blurple};
    background-color: ${colors.richBlack}f0;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vw;
    padding: 1vh;
    border-radius: 1vw;
    font-size: 1.3rem;
`;


