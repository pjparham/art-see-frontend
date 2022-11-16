import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

export const Nav = styled.nav`
    background: #DEC5A6;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;   
    // width: 80%;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3rem;


`

// export const Nav = styled.nav`
//     background: #ebebeb;
//     height: 80px;
//     display: flex;
//     justify-content: space-between;
//     padding: 0.5rem calc((100vw - 1000px) / 2);
//     z-index: 10;   
//     border: 3.5px solid #0180e7;
//     border-radius: 20px;
//     // width: 80%;
// `

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