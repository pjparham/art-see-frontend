import styled from 'styled-components';

export const StyledButton = styled.button`
    position: relative;
    background-color: #DEC5A6;
    border: #DEC5A6 solid 3px;
    border-radius: 5px;
    margin-top: .5rem;
    height: 2rem;
    width: max-content;
    color: black;
    font-size: 18px;
    justify-self: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        border: #DEC5A6 solid 3px;
        background-color: #FFE7D4;

      }
`



// button {
//     position: relative;
//     background-color: #e04b52;
//     border: none;
//     border-radius: 5px;
//     height: 3rem;
//     width: max-content;
//     color: whitesmoke;
//     font-size: 18px;
//     justify-self: center;
//   }
  
//   .buttonContainer {
//     text-align: center;
//     padding: 1rem;
//   }
  
//   button:hover {
//     background-color: whitesmoke;
//     border: #e04b52 solid 1px;
//     color: #e04b52;
//   }