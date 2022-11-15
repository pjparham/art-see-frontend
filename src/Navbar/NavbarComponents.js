import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

// export const NavLink = styled(Link)`
//     color: #000;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height 100%;
//     cursor: pointer;
//     font-size: 20px;

//     &.active {
//         color: #0180e7
//     }