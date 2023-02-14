import styled from "styled-components";


export const ContactContainer = styled.div`
width: 80%;
min-height: 100vh;
height: 100%;
margin: 0 auto;
display:flex;
align-items: center;
justify-content: center; 
flex-wrap: wrap;
font-family: 'DM Sans', sans-serif;
`
export const Faixa = styled.div`
width: 250px;
min-height:100vh;
height: 100%;
margin: 0 auto;
background: #F4C430;
position: absolute;
z-index: 0;
`
export const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
background: #000;
display:flex;
justify-content: center; 
`

export const MyContact = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-width: 300px;
z-index: 1;
`


export const TituloContato = styled.h1`
color: #FFF;
text-align: center;

`

export const IconesContainer = styled.div`
font-size: 36px;
display: flex;
gap: 2vw;

`
export const Icone = styled.a`
text-decoration: none;
color: #FFF;
`






