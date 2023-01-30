import styled from 'styled-components';

  // font-family: 'Fredericka the Great', cursive;
export const Escrita = styled.div`
    font-family: 'Orbitron', sans-serif;
    width: 100%;
    display:flex;
   `

    export const Texto = styled.h1`
    font-size: ${props => props.fontSize || '50px' } ;
    align-self: ${props => props.alignSelf || 'start' };
    text-align: ${props => props.textAlign || 'start' };
    color: #000;
    overflow: hidden;
    margin: 0 auto;
    display: inline-block;
        font-weight: normal;
    :after{
    content: '';
    display: inline-block;
    background-color: black;
    height: 35px;
    width: 4px;
    animation: cursor 0.4s infinite;

    @keyframes cursor {
    0% { opacity: 1; }
      49% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 0; }
    }
    `