import styled from 'styled-components';


export const Escrita = styled.div`
    font-family: 'Orbitron', sans-serif;
    width: 100%;
    display:flex;
  
   `

    export const Texto = styled.h1`
    font-size: 50px;
    align-self: center;
    text-align: center;
    color: #FFF;
    overflow: hidden;
    margin: 0 auto;
    display: inline-block;
        font-weight: normal;
        @media(max-width: 480px){
          font-size: 25px;
    
    :after{
    content: '';
    display: inline-block;
    background-color: white;
    height: 35px;
    width: 4px;
    animation: cursor 0.4s infinite;
    
    @keyframes cursor {
    0% { opacity: 1; }
      49% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 0; }
    }
   
    }
    `